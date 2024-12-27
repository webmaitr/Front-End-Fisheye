
function deleteMedia () {
  const mediaDeleted = document.querySelector('.media_lightbox');
  mediaDeleted.innerHTML = '';
}

function closeLightbox() {
  deleteMedia();
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

const closeLightboxIcon = document.querySelector(".modal_lightbox img:first-of-type");
closeLightboxIcon.addEventListener("click", closeLightbox);

closeLightboxIcon.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {closeLightbox();};
})


function setLightbox() {
  // setting listener on each image and video
  const lightboxNodeList = document.querySelectorAll('.gallery-item a');

  const lightboxMedias = Array.from(lightboxNodeList);

  lightboxMedias.forEach((lightboxMedia) => lightboxMedia.addEventListener("click", displayLightbox));

  // gathering img and video in an array
  const mediaList = lightboxMedias.map((media) => media.innerHTML);  
  

    //display lightbox
    function displayLightbox(e) {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";


    // catching index of current image or video
    let myIndex = lightboxMedias.indexOf(e.currentTarget);
  
    const mediaModal = document.querySelector('.media_lightbox');
    const myMedia = mediaList[myIndex];
    mediaModal.innerHTML = myMedia;

      // setting listener on back and forward arrows
      const forward = document.getElementById("right");
      const back = document.getElementById("left");
      forward.addEventListener("click", moveForward);
      back.addEventListener("click", moveBack);

      document.addEventListener("keydown", (e)=> {
        console.log(e.key);
        if (e.key === " " || e.key === "ArrowRight") {moveForward()}
        else if (e.key === "ArrowLeft") {moveBack()}
        else if (e.key === "Escape") {closeLightbox()};
      })


      function moveForward() {       
        const slideRight = document.querySelector('.media_lightbox');
        deleteMedia();
        if (myIndex + 1 < mediaList.length) {
          slideRight.innerHTML = mediaList[myIndex+ 1];
          myIndex++;
        } else {
          slideRight.innerHTML = mediaList[0];
          myIndex = 0;
        }
      }

      

      function moveBack() {
        const slideRight = document.querySelector('.media_lightbox');
        deleteMedia();
        if (myIndex - 1 > 0) {
          slideRight.innerHTML = mediaList[myIndex - 1];
          myIndex--;
        } else {
          slideRight.innerHTML = mediaList[mediaList.length - 1];
          myIndex = mediaList.length;
        }
      }


    }

    
}









