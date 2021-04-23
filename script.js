const selectBtn = document.getElementById("btnInput");
const saveBtn = document.querySelector(".btn-save");
const canvas = document.querySelector("canvas");
let selectedFile = document.getElementById("btnInput").files[0],
    newImgSrc = new Image();
const img = new Image(),
      ctx = canvas.getContext("2d");
      img.setAttribute('crossOrigin', 'anonymous'); 
      img.src = "assets/img/img.jpg";

// upload image to service

selectBtn.addEventListener('change', function(e) {
    const file = selectBtn.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newImg = document.getElementById('editorImage');
      newImg.src = reader.result;
      canvas.width = img.width;
      canvas.height = img.height;
      img.src = reader.result;
    }
    reader.readAsDataURL(file);
});

// drow image canvas

function drawImage() {
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = "blur(10px)";
    ctx.drawImage(img, 0, 0);
  };  
}

// create new link for download

saveBtn.addEventListener('click', function(e) {
  const link = document.createElement('a');
  const dataURL = canvas.toDataURL("image/png");
  link.setAttribute('href', dataURL);
  link.setAttribute('download', 'download.png');
  link.click();
	return false;
});

drawImage();