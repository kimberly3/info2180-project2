function setEvents(){

var ex1 =  document.getElementById("puzzlearea");

var a= 0;
var emptytilePosRow = 4;
var emptytilePosCol = 4;
var checker = true;
var checkerRow = true;



//set board
while (a < 15) {
	ex1.getElementsByTagName("div")[a].className = "puzzlepiece";//create a class called puzzlepiece
	settiles(ex1.getElementsByTagName("div")[a], a);
	addbackground(ex1.getElementsByTagName("div")[a], a );
	setinitialcordinates(ex1.getElementsByTagName("div")[a],a);
	ex1.getElementsByTagName("div")[a].addEventListener("click", movetile);
	a++;
}









}

window.onload = function() {
	setEvents(); 
}
