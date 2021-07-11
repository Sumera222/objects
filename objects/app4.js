/*Take the above array of objects and add a book of your choice
 to it with the same properties.*/

let book = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    }
];


function addItemAtStart() {

    //shift every item one place forward
    for (let i = book.length; i >= 0; i--) {

        book[i] = book[i - 1];
    }

    //add new book to 0 index
    book[book.length - book.length] = {
        name: "New Added Book at First",
        topics: ["New Chapter-1", "New Chapter-2"],
    };

}

addItemAtStart();
console.log(book);

