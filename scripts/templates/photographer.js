function photographerTemplate(data) {
    //affectation par décomposition (destructuring)
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

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
    return { name, picture, getUserCardDOM }
}