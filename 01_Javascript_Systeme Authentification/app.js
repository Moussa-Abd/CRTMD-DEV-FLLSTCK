
const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');

const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

const formConnection = document.querySelector('.form-connection');

btnInscription.addEventListener('click', () => {

    if(formConnection.classList.contains('apparition')){
        formConnection.classList.remove('apparition');
    }

    formInscription.classList.toggle('apparition');
})

btnConnection.addEventListener('click', () => {

    if(formInscription.classList.contains('apparition')){
        formInscription.classList.remove('apparition');
    }

    formConnection.classList.toggle('apparition');
})

formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value;

    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur).
    then(cred => {
        formInscription.reset();
        formInscription.classList.toggle('apparition');
    })
})

// Deco

deco.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {

    })
})

// Connecter

formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur).
    then(cred => {
        formConnection.reset();
        formConnection.classList.toggle('apparition');
    })
})

// Gerer le contenu
const h1 = document.querySelector('h1');
const etat = document.querySelector('.etat')
const bgEtat = document.querySelector('.Etat')
const info = document.querySelector('.info');
const bgContenu = document.querySelector('.contenu');

auth.onAuthStateChanged( utilisateur => {

    if (utilisateur){

        bgContenu.style.background ="rgb(157, 253, 140)";
        btnInscription.style.display = "none";
        btnConnection.style.display = "none";
        deco.style.display = "inline-block";
        info.innerText = "voici le contenu privé !";
        h1.innerText = "Vous voilà de retour ! :) ";
        etat.innerText = "Connecter";
    
        bgEtat.style.background = "green";

    } else {

        btnInscription.style.display = "inline-block";
        btnConnection.style.display = "inline-block";
        deco.style.display = "none";
        bgContenu.style.background ="rgb(192, 255, 255)";
        info.innerText = "contenu public.";
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez vous !";
        etat.innerText = "Déconnecter";
        bgEtat.style.background = "red";
    }
})

