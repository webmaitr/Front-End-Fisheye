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
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = city + ", " + country;
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
        return (article);
    }

    
     function getUserHeaderDOM() {
        const text = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const location = document.createElement('p');
        location.textContent = city + ", " + country;
        const tag = document.createElement('p');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        tag.textContent = tagline;
        text.appendChild(h1);
        text.appendChild(location);
        text.appendChild(tag);

        return (text);
    }
 
    return { name, picture, getUserCardDOM, getUserHeaderDOM }
}
/*
function mediaTemplate(data) {
    const {image, title} = data;

    function setGallery() {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.setAttribute("src", image);
        const figcaption = document.createElement('figcaption');
        const pTitle = document.createElement('p');
        pTitle.textContent = title;
        figure.appendChild(img);
        figcaption.appendChild(pTitle);
        figure.appendChild(figcaption);
        return (figure);
    }
    return setGallery();
}
*/