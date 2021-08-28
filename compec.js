$("#formButton").click(function () {
  var name = $("#formName").val();
  var title = $("#formTitle").val();
  var telno = $("#formTelno").val();
  var email = $("#formEmail").val();
  var linkedin = $("#formLinkedin").val();

  Promise.all([
    document.fonts.load("700 32px Roboto", name),
    document.fonts.load("300 20px Roboto", title),
    document.fonts.load("500 16px Roboto", telno),
  ]).then(() => {
    function copyToClipboard(html) {
      var container = document.createElement("div");
      container.innerHTML = html;
      container.style.position = "fixed";
      container.style.pointerEvents = "none";
      container.style.opacity = 0;
      document.body.appendChild(container);
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(container);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      document.body.removeChild(container);
      //alert("Copied");
    }

    const parent = document.getElementById("show_img_here");
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.lastChild);
    }

    //parent.removeChild(parent.firstChild);
    const canvas = document.createElement("CANVAS");
    canvas.width = 400;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "700 32px Roboto";
    ctx.fillStyle = "#1F5890";
    ctx.fillText(name, 13, 90);

    ctx.font = "300 20px Roboto";
    ctx.fillStyle = "#1F5890";
    ctx.fillText(title, 13, 115);

    const imgcanvas = document.createElement("IMG");
    const dataURL = canvas.toDataURL();
    console.log(dataURL);
    imgcanvas.src = dataURL;

    parent.appendChild(imgcanvas);

    //phone icon

    const parentPhone = document.getElementById("show_phone_here");
    while (parentPhone.hasChildNodes()) {
      parentPhone.removeChild(parentPhone.lastChild);
    }
    const canvasPhone = document.createElement("CANVAS");
    canvasPhone.width = 300;
    canvasPhone.height = 32;

    const ctxPhone = canvasPhone.getContext("2d");
    ctxPhone.clearRect(0, 0, canvasPhone.width, canvasPhone.height);
    ctxPhone.font = "500 16px Roboto";

    ctxPhone.fillStyle = "#1F5890";
    ctxPhone.fillText(telno, 6, 22);
    const imgPhone = document.createElement("IMG");

    imgPhone.height = 32;
    const phoneDataURL = canvasPhone.toDataURL();
    imgPhone.src = phoneDataURL;
    parentPhone.appendChild(imgPhone);

    // letter icon

    const parentLetter = document.getElementById("show_letter_here");
    while (parentLetter.hasChildNodes()) {
      parentLetter.removeChild(parentLetter.lastChild);
    }
    const canvasLetter = document.createElement("CANVAS");
    canvasLetter.width = 300;
    canvasLetter.height = 32;

    const ctxLetter = canvasLetter.getContext("2d");
    ctxLetter.clearRect(0, 0, canvasLetter.width, canvasLetter.height);
    ctxLetter.font = "500 16px Roboto";

    ctxLetter.fillStyle = "#1F5890";
    ctxLetter.fillText(email, 6, 22);
    const imgLetter = document.createElement("IMG");

    imgLetter.height = 32;
    const letterDataURL = canvasLetter.toDataURL();
    imgLetter.src = letterDataURL;
    parentLetter.appendChild(imgLetter);

    const letterLink = document.getElementById("letterLink");
    letterLink.href = `mailto:${email}`;
    console.log(letterLink.href);

    //linkedin icon

    const linkedinLink = document.getElementById("linkedinLink");
    linkedinLink.href = `${linkedin}`;
    console.log(letterLink.href);

    const mailimza = document.getElementById("mailimza");
    copyToClipboard(mailimza.innerHTML);

    // icons
    /* const parent1 = document.getElementById("show_icons_here");
    const canvas1 = document.createElement("CANVAS1");
    canvas1.width = 400;
    const ctx1 = canvas1.getContext("2d");
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.font = "500 16px Roboto";
    ctx1.fillStyle = "#1F5890";
    ctx1.fillText(telno, 10, 20); */
  });
  setTimeout(function () {
    alert(
      "Mail imzanız panoya kopyalandı! Roundcube için gönderme seçeneklerini html olarak değiştirip yapıştırmanız gerekmekte."
    );
  }, 1);
  console.log(name, title, telno, email, linkedin);
});

window.onload = function (e) {
  const canvas = document.createElement("CANVAS");
  const img = document.getElementById("compec-left");
  canvas.style.padding = 0;
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 1, 1);
  img.src = canvas.toDataURL();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img1 = document.getElementById("compec-right");
  canvas.style.padding = 0;
  canvas.width = img1.width;
  canvas.height = img1.height;
  ctx.drawImage(img1, 0, 0);
  img1.src = canvas.toDataURL();

  //phone
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imgPhone = document.getElementById("phoneImage");
  canvas.style.padding = 0;
  canvas.width = imgPhone.width;
  canvas.height = imgPhone.height;
  ctx.drawImage(imgPhone, 0, 0);
  imgPhone.src = canvas.toDataURL();

  // letter
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imgLetter = document.getElementById("letterImage");
  canvas.style.padding = 0;
  canvas.width = imgLetter.width;
  canvas.height = imgLetter.height;
  ctx.drawImage(imgLetter, 0, 0);
  imgLetter.src = canvas.toDataURL();

  // linkedin
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imgLinkedin = document.getElementById("linkedinImage");
  canvas.style.padding = 0;
  canvas.width = imgLinkedin.width;
  canvas.height = imgLinkedin.height;
  ctx.drawImage(imgLinkedin, 0, 0);
  imgLinkedin.src = canvas.toDataURL();

  // world
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imgWorld = document.getElementById("worldImage");
  canvas.style.padding = 0;
  canvas.width = imgWorld.width;
  canvas.height = imgWorld.height;
  ctx.drawImage(imgWorld, 0, 0);
  imgWorld.src = canvas.toDataURL();
};
