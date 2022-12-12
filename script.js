//Declare empty array for library
let myLibrary= [];



//Object constructor function 
function Book(Title,Author, Pages, Read){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
    this.info = function(){
        return(title + author + ", " + pages)
    }
}


//Function for adding a new book to the array


function addBookToLibray(Title, Author, Pages, Read){
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
}

function displayBooksOnPage(){
    const books = document.querySelector(".books");
    
    //Loop over the library array and display to the cards
    myLibrary.forEach(myLibrary =>{
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for(let key in myLibrary){
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}