let count = 0;


function buttonClicked(){

	let newText = "Button was clicked"

	//Select element we want to modify
	let buttonDiv = document.getElementById("button-div")

	count = count + 1;

	//Update text
	buttonDiv.innerHTML = "Number of times button clicked: " + count.toString();

}