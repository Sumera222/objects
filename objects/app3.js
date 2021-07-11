/*Suppose you have an array of objects:

  let books = [
{
      name: ‘The Lean Startup’,
      topics: [‘entrepreneurship’,’startups’],
    },
    {
      name: ‘War and Peace’,
      topics: [‘peace’, ‘politics’],
    }];
Now you need to print the name and topics separately,
 how would you do that?*/

let books = [
  {
    name: "The Lean Startup",
    topics: ["entrepreneurship", "startups"],
  },
  {
    name: "War and Peace",
    topics: ["peace", "politics"],
  }
];

//The Array.map() method calls the provided function once for each element in an array, in order.

// printing books separately
console.log("Books:"); 
books.map(bookNames);

// printing topics separately
console.log("\nTopics:");
books.map(topicNames);

function bookNames(books) {
   console.log(books.name);
}

function topicNames(books) {
  console.log(books.topics[0]);
  console.log(books.topics[1]);
}
