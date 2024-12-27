function photographerTemplate(data) {
    //destructuring the object given as a parameter
    const { name, id, city, country, tagline, price, portrait } = data;
    //picking the relevant picture based on portrait assigned above
    const picture = `assets/photographers/${portrait}`;

    //creating the article for a photographer
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute("href", `photographer.html?id=${id}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `photo portrait de ${name}`);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = city + ", " + country;
        location.setAttribute("lang", "en");
        const tag = document.createElement('p');
        tag.textContent = tagline;
        const fee = document.createElement('p');
        fee.textContent = price + "€/jour";
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(fee);
        
        function modifyCard (){
            const h1 = document.createElement('h1');
            h1.innerText = name;
            const divTitle = document.createElement('div');
            const divImg = document.createElement('div');
            const divInset = document.createElement('div');
            divInset.setAttribute('class', 'total_likes_fee');
            const iconLike = document.createElement('i');
            iconLike.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
            const nbTotLikes = document.createElement('p');
            divTitle.appendChild(h1);
            divTitle.appendChild(location)
            divTitle.appendChild(tag);
            divInset.appendChild(nbTotLikes);
            divInset.appendChild(iconLike);
            divInset.appendChild(fee);
            divTitle.appendChild(divInset);
            divImg.appendChild(img);
            return {divTitle, divImg};
        }
        return {article, modifyCard};
    }
    return { name, picture, getUserCardDOM } 
}


function mediaTemplate(data) {
    const {image, video, title, photographerId, likes} = data;
    const imgSrc = `assets/photos/${photographerId}/${image}`;
    const vidSrc = `assets/photos/${photographerId}/${video}`;
    function setGallery() {
        const divMedia = document.createElement('div');
        divMedia.setAttribute("class", "gallery-item");
        const medLink = document.createElement('a');
        medLink.setAttribute("href", "javascript:void(0)"); 
        let med;
        if (image) {
            med = document.createElement('img');
            med.setAttribute("src", imgSrc);
        } else {
            med = document.createElement('video');
            source = document.createElement('source');
            source.setAttribute("src", vidSrc)
            med.appendChild(source)
        }
        const foot = document.createElement('div');
        const caption = document.createElement('p');
        caption.innerText = title;
        const likeDiv = document.createElement('div');
        const nbOfLikes = document.createElement('p');
        nbOfLikes.innerText = likes;
        nbOfLikes.setAttribute('class', 'nb_likes');
        const iconLike = document.createElement('i');
        iconLike.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
    
        medLink.appendChild(med);
        divMedia.appendChild(medLink);
        foot.appendChild(caption);
        likeDiv.appendChild(nbOfLikes);
        likeDiv.appendChild(iconLike);
        foot.appendChild(likeDiv);
        divMedia.appendChild(foot);
    

    //managing new likes
        iconLike.addEventListener('click', function(e) {
            let newlikes = likes;
            newlikes++;
            nbOfLikes.innerText = newlikes;
            
           countTotalLikes()
        }, {once:true});
        
        return (divMedia);
    }

   
    
    return {likes, setGallery};
}

