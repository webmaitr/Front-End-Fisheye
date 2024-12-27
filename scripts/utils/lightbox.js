

function deleteMedia () {
  const mediaDeleted = document.querySelector('.media_lightbox');
  mediaDeleted.innerHTML = '';
}

function closeLightbox() {
  deleteMedia();
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}


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

    // //put selected media inside the lightbox
    // const mediaModal = document.querySelector('.media_lightbox');
    // const myMedia = e.target;
    // mediaModal.appendChild(myMedia);
    // console.log(myMedia.value);

    // catching index of current image or video
    let myIndex = lightboxMedias.indexOf(e.currentTarget);
    console.log(myIndex);
    console.log(e.currentTarget);
    
    const mediaModal = document.querySelector('.media_lightbox');
    const myMedia = mediaList[myIndex];
    console.log(mediaList);
    console.log(myMedia);
    console.log(mediaModal);
    mediaModal.innerHTML = myMedia;

      // setting listener on back and forward arrows
      const forward = document.getElementById("right");
      const back = document.getElementById("left");
      forward.addEventListener("click", moveForward);
      back.addEventListener("click", moveBack);

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









