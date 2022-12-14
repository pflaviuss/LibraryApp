//Declare empty array for library
let myLibrary= [];



//Object constructor function 
function Book(Title,Author, Pages, Read){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    // this.info = function(){
    //     return(Title + Author + ", " + Pages + ", " + Read)
    // }
}


//Function for adding a new book to the array



function addBookToLibray(Title, Author, Pages, Read){
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooksOnPage();
}

function displayBooksOnPage(){
    const books = document.querySelector(".books");

    //Remove all previously displayed cards before I loop over array again
    const removeDivs = document.querySelectorAll(".card");
    console.log("show me the node count of current card divs...", removeDivs);
    for(let i = 0; i< removeDivs.length; i++){
        removeDivs[i].remove();
    }
    
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

//Start event listener/display form to add a new book to the library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm(){
    document.getElementById("add-book-form").style.display = "";
}


// Start event listener/add input to array for new entry form 
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

//Transform form data to variables for intake
function intakeFormData(){
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;
    if(Read.checked){
        //update the text content of the <p> tag
        document.getElementById("Read").textContent== "Read";
       
    }else{
        document.getElementById("Read").textContent== "Not read";
    }
    
    //Break out if form is incomplete or not valid 
    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")){
        return;
    }
    
    //Call function to input the book data to array

    addBookToLibray(Title, Author, Pages, Read);

    //Reset the form after succesful submission
    document.getElementById("add-book").reset();

}

//Start event listener for clear form button

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm(){
    document.getElementById("add-book").reset();
}




// addBookToLibray("The hoobit", "J.R.R. Tolkien", "200 pages", "not read");
// addBookToLibray("The hoobit", "J.R.R. Tolkien", "200 pages", "not read");
// addBookToLibray("The hoobit", "J.R.R. Tolkien", "200 pages", "not read");
// addBookToLibray("The hoobit", "J.R.R. Tolkien", "200 pages", "not read");
console.log("End of code array contents", myLibrary);

displayBooksOnPage();