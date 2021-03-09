function avviaScansione(){
  const html5QrCode = new Html5Qrcode("contenitore_video");
  const config = { fps: 2, qrbox: 250 };
  const qrCodeSuccessCallback = message => {html5QrCode.stop(), console.log("ID: " + message), getCodiceQRNuovo(message)};
  html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
}

function getCodiceQRNuovo(code){
  visualizzaReperto(code);
}