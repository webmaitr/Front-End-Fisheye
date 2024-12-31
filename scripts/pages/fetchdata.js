//get the data from JSON file

async function getPhotographers() {
  const reponse = await fetch("data/photographers.json");
  const donnees = await reponse.json();
  return donnees;
}