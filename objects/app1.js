/*
You are given a object of user’s details as:
 let userObject = {
 userName: ‘Philip’,
 fatherName: ‘Norman’,
 className: ‘four’,

};

Your task is to traverse the object and print its properties 
(both names and values).*/

let userObject = {

  userName: "Philip",
  fatherName: "Norman",
  className: "four",
  
  };


//traversal
for (let x in userObject) {
  console.log(x, userObject[x]);
}

