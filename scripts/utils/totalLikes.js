//inserting initial total likes
  function countTotalLikes () {
  const allLikes = document.querySelectorAll('.nb_likes');
  let totalLikes = 0;
  allLikes.forEach(element => {
    let nbLikes = parseInt(element.innerText);
    totalLikes = totalLikes + nbLikes;
  });
  const nbTotLikes = document.querySelector('.total_likes_fee p:first-of-type');
  nbTotLikes.innerText = totalLikes;
}

function getNewLikes() {
  const iconLikes = document.querySelectorAll('.gallery-item .material-symbols-outlined');

  iconLikes.forEach(iconLike => {
    iconLike.addEventListener("click", function(e) {
      const clic = e.target;
      let initLikes = clic.parentNode.parentNode.querySelector('.nb_likes').innerText;
      clic.parentNode.parentNode.querySelector('.nb_likes').innerText = initLikes*1 + 1;
      countTotalLikes ();
    }, {once: true})
  })

  iconLikes.forEach(iconLike => {
    iconLike.addEventListener("keydown", function(e) {
      if (e.key === 'Enter')
        {const clic = e.target;
        let initLikes = clic.parentNode.parentNode.querySelector('.nb_likes').innerText;
        clic.parentNode.parentNode.querySelector('.nb_likes').innerText = initLikes*1 + 1;
        countTotalLikes ();
      }}, {once: true})
  })
}