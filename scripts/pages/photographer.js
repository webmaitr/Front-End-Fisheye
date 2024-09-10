//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
  const reponse = await fetch("data/photographers.json");
  const donnees = await reponse.json();
  // et bien retourner le tableau photographers seulement une fois récupéré
  return donnees;
}





  // Récupère les données du photographe
  async function getThePhotographer() {
    //récupère l'id
    let params = new URL(document.location).searchParams;
    let thePhotographerId = params.get("id");
    //récupère l'ensemble des données
    const photographers = await getPhotographers();
    //récupère les infos du photographe selon l'id
    const photographArray = photographers.photographers;
    const thePhotographer = photographArray.filter(index => index.id == thePhotographerId);
    //récupère les medias du photographe selon l'id
    const mediaArray = photographers.media;
    const thePhotographMedia = mediaArray.filter(index => index.photographerId == thePhotographerId);
    
    console.log(thePhotographer);
    console.log(thePhotographMedia);
  }

  getThePhotographer();
