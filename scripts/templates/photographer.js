function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = city + ", " + country;
        const tag = document.createElement('p');
        tag.textContent = tagline;
        const fee = document.createElement('p');
        fee.textContent = price + "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(fee);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}