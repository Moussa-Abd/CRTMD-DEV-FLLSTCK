
const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('.book-form');
const container = document.querySelector('.container');

class Book {
    constructor( titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    addBookToList(book){

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><span class="delete"><i></i></span></td>
        `
        bookList.appendChild(row);
    }

    clearFields(){
        document.getElementById('titre').value = "";
        document.getElementById('auteur').value = "";
        document.getElementById('annee').value = "";
    }

    showAlert(message, className){

        const alert = document.createElement('div');
        alert.className = ` alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        container.insertBefore(alert, bookForm);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500)
    }
}

class supprimer { 

    deleteBook(target){

        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

bookForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;

    const book = new Book(titre, auteur, annee);

    if( titre === ""|| auteur === ""|| annee === ""){
        book.showAlert('remplissz les champs !', 'error')
    }else{
        book.showAlert('Merci!', 'success')
    }

    book.addBookToList(book);
    book.clearFields();
})

bookList.addEventListener('click', (e) =>{

    const ui = new supprimer ();

    ui.deleteBook(e.target);
})