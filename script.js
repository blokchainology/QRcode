const $ = document ;
const input = $.querySelector("input");
const button = $.querySelector("button");
const qrCodeDiv = $.querySelector(".qr");

button.addEventListener("click" , ()=> {
    const div = $.createElement("div");
    div.setAttribute('class' , "div d-flex j-center p-20 m-20 back-olive radius-15")
    qrCodeDiv.append(div);
    const QRCODE = new QRCode(div, input.value)
})

const QR = new QRCode( $.querySelector(".qrUrl") , "https://blokchainology.com")

