
function displayModal(e) {
    e.stopPropagation;
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const closeModalIcon = document.querySelector(".modal img");
closeModalIcon.addEventListener("click", closeModal);

closeModalIcon.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {closeModal();};
})

function setContactFormTitle () {
    const nameForm = document.querySelector("h1").innerHTML;
    let contactFormTitle = document.querySelector(".modal h2");
    contactFormTitle.innerHTML += `<br>${nameForm}`;
  }

const contactButton = document.querySelector('.photograph-header .contact_button');
contactButton.addEventListener('click', displayModal);

const envoiButton = document.querySelector('form .contact_button');
envoiButton.addEventListener('click', function getData (){
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(message.value);
})