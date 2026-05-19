
function generateVCard() {
  const hubUrl = "https://hub-hub-jaime-labcheap.npfusf.easypanel.host/";
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${'Jaime Maguesin'};;;;
FN:${'Jaime Maguesin'}
ORG:LabCheap
TITLE:${'Marketing'}
TEL;TYPE=WORK,VOICE:${'955388029'}
TEL;TYPE=CELL,VOICE:${'955388029'}
EMAIL;TYPE=WORK,INTERNET:${'marketing@labcheap.es'}
URL:https://www.labcheap.es
URL;TYPE=HUB:${hubUrl}
ADR;TYPE=WORK:;;Calle Zoología, 48, esquina con Calle Sociología, Parque Empresarial Nuevo Torneo;Sevilla;;41015;España
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Jaime_Maguesin_LabCheap.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
