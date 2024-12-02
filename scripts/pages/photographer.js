//Mettre le code JavaScript lié à la page photographer.html



  
  //get the id of the photographer from url
  function getTheId() {
    let params = new URL(document.location).searchParams;
    let thePhotographerId = params.get("id");
    return thePhotographerId;
  }
  
  //display data of the photographer header

  async function displayHeader(photographer) {
    const photographerHeader = document.querySelector('.photograph-header');

    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    

    const headerDOM = userCardDOM.modifyCard();
    const button = document.querySelector('button');
    
    photographerHeader.appendChild(headerDOM.divTitle);
    photographerHeader.insertBefore(headerDOM.divTitle, button);
    
    photographerHeader.appendChild(headerDOM.divImg)

  }
  
   //display the gallery of the photographer
  async function displayMedia(photographerMedia) {
    const mediaSection = document.querySelector(".photograph-media");
      
    photographerMedia.forEach ((photo) => {const figureModel = mediaTemplate(photo);
      const figureDOM = figureModel.setGallery();
      mediaSection.appendChild(figureDOM);
    })
    
  }   



  async function init() {
    const photographerID = getTheId();
    const {photographers, media} = await getPhotographers();
    const index = photographers.findIndex(element => element.id == photographerID);
    displayHeader(photographers[index]);
    
    const myMedia = media.filter(element => element.photographerId == photographerID);
    displayMedia(myMedia);
  }
  
  init();



