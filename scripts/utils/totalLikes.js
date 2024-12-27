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

