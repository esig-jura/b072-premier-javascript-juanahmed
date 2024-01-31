'use strict';
//déclaration des variables
let nom = 'Ahmed';
let prenom = 'Juan';
let age = 29;

nom = nom.toUpperCase();

//console.log(nom, prenom, age);

//récupérer le titre 1 et l'afficher
const titreUn = document.querySelector('h1');
titreUn.style.backgroundColor = 'yellow';
console.log(titreUn);

const paras = document.querySelectorAll('p');

//parcourt le tableau des paragraphes

for (let i = 0 ; i < paras.length; i++){
    paras[i].style.color = 'red';
}

//avec un for...of
for (let unPara of paras) {
    unPara.style.backgroundColor = 'black';
}
console.log(paras);

//Récupération des éléments pour gérer les tâches (input, bouton, liste)
const inputTache = document.querySelector('#tache');
const buttonAjouter = document.querySelector('button.ajouter');
const ulTaches = document.querySelector('.liste-taches');

console.log(inputTache, buttonAjouter, ulTaches);

// buttonAjouter.onclick = function (){
//     alert('clic !');
// };


//Ecouter le clic de la souris
function ajouter(){

    //Récupérer la valeur saisie par l'utilisateur
    let saisieUser = inputTache.value;
    //alert(`Valeur saisie: ${saisieUser} !`);
    ulTaches.innerHTML += `<li>${saisieUser}</li>`;

    //Vider le champ de saisie
    inputTache.value = '';

    //Redonner le focus au champ de saisie
    inputTache.focus();
}

//Ecouter le clic de la souris
buttonAjouter.addEventListener('click', ajouter);

//Ecouter le clavier sur champ de saisie
inputTache.addEventListener('keypress', function (e) {
    console.log(e);
    if (e.key === 'Enter'){
        ajouter();
    }
});



