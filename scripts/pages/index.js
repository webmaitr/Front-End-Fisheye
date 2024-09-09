//fonction pour récupérer les données    
    async function getPhotographers() {
        const reponse = await fetch("data/photographers.json");
        const donnees = await reponse.json();
        console.log(donnees.photographers);
        // et bien retourner le tableau photographers seulement une fois récupéré
        return donnees;
    }
//fonction pour construire et afficher la page d'accueil
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        
        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
