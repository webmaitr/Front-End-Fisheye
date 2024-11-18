//Mettre le code JavaScript lié à la page photographer.html



  
  //get the id of the photographer from url
  function getTheId() {
    let params = new URL(document.location).searchParams;
    let thePhotographerId = params.get("id");
    //console.log(thePhotographerId);
    return thePhotographerId;
  }
  
  //display data of the photographer header

  async function displayHeader(photographer) {
    const photographerHeader = document.querySelector('.photograph-header');

    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    /*const userHeaderDOM = photographerModel.getUserHeaderDOM();
    */
   photographerHeader.appendChild(userCardDOM);

      }
  
  
    
    

  

  async function init() {
    const photographerID = getTheId();
    const {photographers} = await getPhotographers();
    const index = photographers.findIndex(element => element.id == photographerID);
    displayHeader(photographers[index]);
    
  }
  
  init();


/*
   //get the data of the photographer
  async function getThePhotographer() {    
    const { photographers } = await getPhotographers();  
    const thePhotographer = photographers.filter(index => index.id == getTheId());
    return thePhotographer;
  }

  //get the media of the photographer  
  async function getThePhotographerMedia() {
    const { media } = await getPhotographers();
    const thePhotographerMedia = media.filter(index => index.photographerId == getTheId());
    return thePhotographerMedia;
  }
  
  //display the photographer header
  async function displayData(photographer) {
    const photographerSection = document.querySelector(".photograph-header");
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographerSection.appendChild(userCardDOM);
  };

  //display the gallery of the photographer
  /*async function displayMedia(photographer) {
    const mediaSection = document.querySelector(".photograph-media");
      const galleryModel = setGallery(photographer);
      const gallery = galleryModel.setGallery();
      mediaSection.appendChild(gallery);
  }



  */
/*
  async function init() {
    const myPhotographer = await getThePhotographer();
    displayData(myPhotographer[0]);
    
    const photographerSection = document.querySelector('.photograph-header');
    const button = document.querySelector('button');
    const article = document.querySelector('article');
    const h1 = document.createElement('h1');
    const h2 = document.querySelector('a h2');
    const img = document.querySelector('a img');
    const a = document.querySelector('article a');
    const text = document.getElementsByTagName('p');photographerSection.insertBefore(img, article);
      for (const p of text) {
        photographerSection.insertBefore(p, article)
      }
    h1.innerText = h2.innerText;
    photographerSection.appendChild(h1);
    photographerSection.insertBefore(h1, button);
    photographerSection.removeChild(article); 


  };
  init()
  
  
  getThePhotographerMedia();
*/