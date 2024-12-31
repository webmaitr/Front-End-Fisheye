  
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
    
    photographerHeader.appendChild(headerDOM.divImg);

    setContactFormTitle ();
  }

  async function initHeader() {
    const photographerID = getTheId();
    const {photographers} = await getPhotographers();
    const index = photographers.findIndex(element => element.id == photographerID);
    displayHeader(photographers[index]);
  }

  displaySelectList();

   //display the gallery of the photographer
  async function displayMedia(photographerMedia) {
    const mediaSection = document.querySelector(".photograph-media");
      
    photographerMedia.forEach ((photo) => {const figureModel = mediaTemplate(photo);
      const figureDOM = figureModel.setGallery();

   
      
      mediaSection.appendChild(figureDOM);
       countTotalLikes();      
    })

  }   

  async function initMedia() {
    const photographerID = getTheId();
    const {media} = await getPhotographers();
   
    let myMedia = media.filter(element => element.photographerId == photographerID);

  
    const mediaSelect = document.getElementById("mediaSelect"); 
    let mediaChoice = mediaSelect.innerText;
    switch(mediaChoice) {
              case 'Titre' :
                myMedia = myMedia.sort((a, b) => a.title.localeCompare(b.title));
                break;
              case 'Popularité' :
                myMedia = myMedia.sort((a, b) => b.likes - a.likes);
                break;
              case 'Date' :
                myMedia = myMedia.sort((a, b) => b.date.localeCompare(a.date));
                break;
    }
  

    displayMedia(myMedia);
  
  getNewLikes();
  setLightbox();
    
  };

  initHeader();
  initMedia();
