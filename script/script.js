// elements
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const notes = document.querySelector('#notes');
//const radioButton //here tak th radio button choice
const radioButtons = document.querySelector('radioButtons');

const addButton = document.querySelector('#addButton');

let controlValue = 0;


// behaviour
const booksRead = [];
const booksToRead = [];
const booksReading = [];

function Book(title, author, pages, notes, nominalValue){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.notes = notes;
  //this.radioButton = radioButtons;
  this.nominalValue = controlValue + 1;
  controlValue++;
  addTheBook(this);
}

function addTheBook(newbook){
  const checkedRadioButton = document.querySelector('input[name="option"]:checked');
  const checkedValue = checkedRadioButton ? checkedRadioButton.value : null;

  // console.log(checkedValue)
  if (checkedValue === 'read'){
    booksRead.push(newbook);
  } else if (checkedValue === 'reading'){
    booksReading.push(newbook);
  } else if (checkedValue === 'to read'){
    booksToRead.push(newbook);
  } else if (checkedValue === null){
    alert('Check an option below')
  }
}

function emptyAll(){
  title.value = '';
  author.value = '';
  pages.value = '';
  notes.value = '';
}
// let book0 = new Book('il signore', 'paolo rossi', 345, 'bel libro!!!');

addButton.addEventListener('click', function(event) {
  // e.preventDefault();
  event.preventDefault();
  
   const exampleOne = new Book(title.value, author.value, pages.value, notes.value);
   
   emptyAll()
   
 })