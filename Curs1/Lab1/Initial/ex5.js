// Create a book object
const book1 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    isAvailable: true
};


// Create an array to store multiple books
const libraryCatalog = [book1/* add more books here */];

// Write a function to display all available books
function displayAvailableBooks() {
  
}

// Write a function to borrow a book
function borrowBook(title) {
    const book = libraryCatalog.find(book => book.title === title);

    if (book) {
        //Add code here
    } else {
        console.log(`Book not found: ${title}`);
    }
}

// Write a function to return a book
function returnBook(title) {
    const book = libraryCatalog.find(book => book.title === title);

    if (book) {
        //Add code here
    } else {
        console.log(`Book not found: ${title}`);
    }
    
}


displayAvailableBooks();
borrowBook("The Catcher in the Rye");
displayAvailableBooks();
returnBook("The Catcher in the Rye");
displayAvailableBooks();
