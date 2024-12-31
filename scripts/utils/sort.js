
const mediaSelect = document.getElementById("mediaSelect");
const selection = document.querySelector(".select");

function displaySelectList () {
    
    mediaSelect.parentNode.addEventListener("click", function (e) {
      
      if (selection.style.display === 'inline') {
        const userChoice = e.target.innerText;
        closeSelectList();

        e.target.innerText = mediaSelect.innerText;
        mediaSelect.innerHTML = `${userChoice} <span><img src="assets/icons/chevron-up.svg" alt=""><span>`;
       
      } 
      else {openSelectList()};
    });
    
    mediaSelect.parentNode.addEventListener("keydown", function (e) {
      
      if (selection.style.display === 'inline' && e.key === 'Enter') {
        const userChoice = e.target.innerText;
        closeSelectList();

        e.target.innerText = mediaSelect.innerText;
        mediaSelect.innerHTML = `${userChoice} <span><img src="assets/icons/chevron-up.svg" alt=""><span>`;
       
      } 
      else {openSelectList()};
    });
}

function openSelectList () {
      mediaSelect.parentNode.querySelectorAll(".select")[0].style.display = "inline";
      mediaSelect.parentNode.querySelectorAll(".select")[1].style.display = "inline";
      mediaSelect.querySelector("span").innerHTML = '<img src="assets/icons/chevron-down.svg" alt="">';
    }

function closeSelectList () {
    mediaSelect.parentNode.querySelectorAll(".select")[0].style.display = "none"
    mediaSelect.parentNode.querySelectorAll(".select")[1].style.display = "none";
    mediaSelect.querySelector("span").innerHTML = '<img src="assets/icons/chevron-up.svg" alt="">';
    clean();
    initMedia();
}


function clean () {

  const initialMedia = document.querySelector('.photograph-media');
      initialMedia.innerHTML = '';
      // displayMedia(media);
      // setLightbox();
}


      
//   }