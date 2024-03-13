// Create a book object
const book1 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    isAvailable: true
};
const book2 = {
    title:"The fault in our stars",
    author: "John Green",
    publishedYear: 2012,    
    isAvailable: true
};
const book3 = {
    title:"Tronul de clestar",
    author: "Sarah J. Maas",
    publishedYear: 2012,
    isAvailable: true
};

// Create an array to store multiple books
const libraryCatalog = [book1, book2, book3/* add more books here */];

// Write a function to display all available books
function displayAvailableBooks() {
    console.log("Available books:");
    libraryCatalog.forEach(book => {
        if (book.isAvailable) {
            console.log(book.title);
        }
    });
    
}

// Write a function to borrow a book
function borrowBook(title) {
    const book = libraryCatalog.find(book => book.title === title);

    if (book) {
        //Add code here
        if(book.isAvailable == true){
            book.isAvailable=false;
            console.log("=====");
            console.log(`${title} has been borrowed`);
        }
        
    } else {
        console.log(`Book not found: ${title}`);
    }
    console.log("=====");
}

// Write a function to return a book
function returnBook(title) {
    const book = libraryCatalog.find(book => book.title === title);

    if (book) {
        //Add code here
        if(book.isAvailable == false){
            book.isAvailable=true;
            console.log("=====");
            console.log(`${title} has been returned`);
            console.log("=====");
        }
    } else {
        console.log(`Book not found: ${title}`);
    }
    
}


displayAvailableBooks();
borrowBook("The Catcher in the Rye");
displayAvailableBooks();
returnBook("The Catcher in the Rye");
displayAvailableBooks();
