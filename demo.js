//Printing

console.log("Hello World");

//Variables

var varVar = "string";

const myCourse = "DS4200";
console.log(myCourse);

//mYCourse = "DS2001";

let season = "Fall";
console.log(season);

season = "winter";
console.log(season);

console.log(typeof(season));

//Functions
function tenTimesFaveNum(faveNum){
	let tenTimes= faveNum * 10;
	return tenTimes
}

let favoriteNum = 6

let tenTimesFave = tenTimesFaveNum(favoriteNum)


console.log(tenTimesFave);

// Modifying webpage
function buttonClicked(){

	let newText = "Button was clicked"

	//Select element we want to modify
	let buttonDiv = document.getElementById("button-div")

	//Update text
	buttonDiv.innerHTML = newText;

}