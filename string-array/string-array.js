const bookList = ['Javascript: The Definitive Guide', 'Modern JavaScript for the Impatient', 'Javascript Essential', 'JS Cookbook', 'Learn Javascript', 'Modern Javascript from the Beginning', 'The Joy of Javascript', 'Multithreaded  Javascript', 'The Modern Javascript Bootcamp', 'Eloquent Model', 'Professional JS for Web Developers'];

const bookJs = books => {
    const newArr = [];
    for(let book of books) {
        // if((book.toLowerCase()).indexOf('javascript') != -1) {
        if((book.toLowerCase()).includes('javascript')) {
            newArr.push(book);
        }
    }
    return newArr;
}

console.log(bookJs(bookList));