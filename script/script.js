// elements
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookNotes = document.querySelector('#notes');

const radioButtons = document.querySelector('radioButtons');

const addButton = document.querySelector('#addButton');



let controlValue = 0;



const booksRead = [];
const booksToRead = [];
const booksReading = [];

// book constructor
// function Book(title, author, pages, notes, nominalValue){
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.notes = notes;

//   this.nominalValue = controlValue + 1;
//   controlValue++;
//   addTheBook(this);

  
//   createDomElement(title, author, pages, notes, nominalValue);
// }
// CLASS
class Book {
  constructor(title, author, pages, notes, nominalValue) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.notes = notes;

    this.nominalValue = controlValue + 1;
    controlValue++;
    addTheBook(this);
  }
}
// CLASS

// add book to the list
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
    alert('Check an option below');
  }

  createDomElement(newbook.title, newbook.author, newbook.pages, newbook.notes, newbook.nominalValue, checkedValue)
}

// create dom element 

const readingDiv = document.querySelector('.reading');
const toReadDiv = document.querySelector('.toread');
const readDiv = document.querySelector('.read');

function createDomElement(title, author, pages, notes, nominalValue, checkedValue){
  const newBookDiv = document.createElement('div');
  newBookDiv.classList.add('myBooks-home-books');
  

  if(checkedValue === 'reading'){
    readingDiv.appendChild(newBookDiv);
    newBookDiv.classList.add('myBooks-home-books-reading');
  } else if(checkedValue === 'to read'){
    toReadDiv.appendChild(newBookDiv);
    newBookDiv.classList.add('myBooks-home-books-toread');
  } else if(checkedValue === 'read'){
    readDiv.appendChild(newBookDiv);
    newBookDiv.classList.add('myBooks-home-books-read');
  } else {
    return;
  }

  const myBooksHomeBooksIcondiv = document.createElement('div');
  myBooksHomeBooksIcondiv.classList.add('myBooks-home-books-icondiv');
  newBookDiv.appendChild(myBooksHomeBooksIcondiv);

  const pTitle = document.createElement('p');
  pTitle.textContent = title;
  myBooksHomeBooksIcondiv.appendChild(pTitle);

  const imgTitle = document.createElement('img');
  imgTitle.src = 'img/delete-icon.svg';
  imgTitle.classList.add('deleteIcon');
  imgTitle.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const parentElement = clickedElement.parentNode;
    const grandParentElement = parentElement.parentNode;

    grandParentElement.remove();
  });
  myBooksHomeBooksIcondiv.appendChild(imgTitle);


  const myBooksHomeBooksNoicondiv = document.createElement('div');
  myBooksHomeBooksNoicondiv.classList.add('myBooks-home-books-noicondiv');
  newBookDiv.appendChild(myBooksHomeBooksNoicondiv);

  const pAuthor = document.createElement('p');
  pAuthor.textContent = 'by ' + author;
  myBooksHomeBooksNoicondiv.appendChild(pAuthor);
  

  const myBooksHomeBooksIcondiv2 = document.createElement('div');
  myBooksHomeBooksIcondiv2.classList.add('myBooks-home-books-icondiv');
  newBookDiv.appendChild(myBooksHomeBooksIcondiv2);

  const pPages = document.createElement('p');
  pPages.textContent = pages + ' pp';
  myBooksHomeBooksIcondiv2.appendChild(pPages);

  const imgPages = document.createElement('img');
  imgPages.src = 'img/modify-icon.svg';
  imgPages.classList.add('modifyIcon');
  imgPages.addEventListener('click', function(event){
    hideTheWindow();
    bookTitle.value = title;
    bookAuthor.value = author;
    bookPages.value = pages;
    bookNotes.value = notes;

    const clickedElement = event.target;
    const parentElement = clickedElement.parentNode;
    const grandParentElement = parentElement.parentNode;

    grandParentElement.remove();
    addTheBook()
  })
  myBooksHomeBooksIcondiv2.appendChild(imgPages);
}


function emptyAll(){
  title.value = '';
  author.value = '';
  pages.value = '';
  notes.value = '';
}


addButton.addEventListener('click', function(event) {
  // e.preventDefault();
  event.preventDefault();
  
   const exampleOne = new Book(title.value, author.value, pages.value, notes.value);
   

   hideTheWindow();
   emptyAll()
   
 })

//  open and close windows 
const openButton = document.querySelector('#open-button');
const cancelButton = document.querySelector('#cancel-button');

const myBooksHome = document.querySelector('.myBooks-home');
const myBooksAddABook = document.querySelector('.myBooks-addABook');

function hideTheWindow(){
  myBooksHome.classList.toggle('hidden');
  openButton.classList.toggle('hidden');
  myBooksAddABook.classList.toggle('hidden');
  cancelButton.classList.toggle('hidden');
}

openButton.addEventListener('click', () =>{
  hideTheWindow()
})

cancelButton.addEventListener('click', () =>{
  hideTheWindow()
})

// minimize books div 
const booksDiv = document.querySelectorAll('.myBooks-home-buttons-button');

booksDiv.forEach(button => {
  button.addEventListener('click', function(){
    if(button.textContent === 'reading'){
      
      readingDiv.classList.toggle('minimize')
    } else if(button.textContent === 'to read'){
      toReadDiv.classList.toggle('minimize');
    } else if(button.textContent === 'read'){
      readDiv.classList.toggle('minimize');
    }
})

})

// delete this book button 
const deleteIcons = document.querySelectorAll('.deleteIcon');