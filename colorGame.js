var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelectorAll("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for(var i=0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		//remove the selected for both to be safe, then highlight this
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		//figure out how many squares to show
		//in each mode//pick a new pickedColor
		//update page to reflect changes

		// ternary operator writing style:
		//this.textContent === "Easy" ? numberSquares = 3 : numberSquares=6;
		if(this.textContent==="Easy"){
			numberSquares = 3;
		} if(this.textContent==="Hard") {
			numberSquares = 6;
		}
		reset()
	})
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	//to change into New Colors 
	this.textContent = "New Colors";
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			//bring back 6 for Hard
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue"
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberSquares = 3;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberSquares = 6;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again";
		} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try again";
			}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i<num;i++){
		//get random color and push into array
		arr.push(randomColors())
	}
	//return that array
	return arr;
}

function randomColors(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b + ")";

}