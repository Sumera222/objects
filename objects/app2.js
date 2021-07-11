/*2. Now, using the same object, change the userName to your name,
fatherName to your father’s name, and className to your class.*/

let object = {
	userName: "Philip",
	fatherName: "Norman",
	className: "four"
};

//below process is used for updating the object

  object.userName = "Sumera";
  object.fatherName = "Hassan";
  object.className = "M.A (I.R)";
  
//for printing the updated object

  console.log("\nUpdated Object:");
  for (let x in object) {
    console.log(x, object[x]);
}
