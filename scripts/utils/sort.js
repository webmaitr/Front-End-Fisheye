function sortMedias(media) {
  const mediaChoice = document.getElementById('mediaSelect');
        

  mediaChoice.addEventListener('change', ()=> {      
    let choice = mediaChoice.value;  

          
      switch(choice) {
        case 'title' :
          media = media.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'likes' :
          media = media.sort((a, b) => b.likes - a.likes);
          break;
        case 'date' :
          media = media.sort((a, b) => b.date.localeCompare(a.date));
          break;
      }
          

      const initialContent = document.querySelector('.photograph-media');
      initialContent.innerHTML = '';
      displayMedia(media);
      setLightbox();
  });
}