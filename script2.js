

// Select Section
const joueur1Select = document.querySelector('.joueur1Select');
const joueur2Select = document.querySelector('.joueur2Select');
const body = document.querySelector('body')

// Select Input
const joueur1Texte = document.querySelector('.joueur1Texte');
const joueur2Texte = document.querySelector('.joueur2Texte');

// Select bouton valid
const joueur1Valid = document.querySelector('.joueur1Valid');
const joueur2Valid = document.querySelector('.joueur2Valid');

// Compteur
let compteurJoueur1 = 0
let compteurJoueur2 = 0

joueur1Valid.addEventListener('click', () => {

    if (compteurJoueur1 < 1){
        const joueur1Name = joueur1Texte.value;
        joueur1Texte.style.display = "none"
        joueur1Valid.style.display = "none"
    
        const pCreateJoueur1 = document.createElement('p')
        pCreateJoueur1.textContent = joueur1Name;
    
        joueur1Select.appendChild(pCreateJoueur1);
        compteurJoueur1++
        console.log(compteurJoueur1);
    }

    if ((compteurJoueur1 + compteurJoueur2) == 2){
        const circlePlay = document.createElement('div');
        circlePlay.style.backgroundColor = "red";
        circlePlay.style.height = "100px"
        circlePlay.style.width = "100px"
        body.appendChild(circlePlay)
    }


})

joueur2Valid.addEventListener('click', () => {


    if (compteurJoueur2 < 1){
        const joueur2Name = joueur2Texte.value;
        joueur2Texte.style.display = "none"
        joueur2Valid.style.display = "none"
    
        const pCreateJoueur2 = document.createElement('p')
        pCreateJoueur2.textContent = joueur2Name;
    
        joueur2Select.appendChild(pCreateJoueur2);
        compteurJoueur2++
        console.log(compteurJoueur2);
    }

    if ((compteurJoueur1 + compteurJoueur2) == 2){
        const circlePlay = document.createElement('div');
        circlePlay.style.backgroundColor = "red";
        circlePlay.style.height = "100px"
        circlePlay.style.width = "100px"
        body.appendChild(circlePlay)
    }

})
