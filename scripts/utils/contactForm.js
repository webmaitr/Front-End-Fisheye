
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function printModalTitle() {
    const photographerName = document.querySelector('h1');
    console.log(photographerName.innerText);
    const modalTitle = document.querySelector('.modal h2');
    console.log(modalTitle.innerText);
    modalTitle.innerText += "\n" + photographerName.innerText;
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