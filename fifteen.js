function setEvents(){

var ex1 =  document.getElementById("puzzlearea");

var a= 0;
var emptytilePosRow = 4;
var emptytilePosCol = 4;
var checker = true;
var checkerRow = true;


//----------SET BOARD-----------------
while (a < 15) {
	ex1.getElementsByTagName("div")[a].className = "puzzlepiece";//create a class called puzzlepiece
	settiles(ex1.getElementsByTagName("div")[a], a);
	addbackground(ex1.getElementsByTagName("div")[a], a );
	setinitialcordinates(ex1.getElementsByTagName("div")[a],a);
	ex1.getElementsByTagName("div")[a].addEventListener("click", movetile);

	a++;
}







//--------------SHUFFLE WHEN CLICKED-------------------
$(document).ready(function(){
 $("#shufflebutton").click(function(){
	n = 0;
	emptytilePosRow = 4;
	emptytilePosCol = 4;
	checker = true;
	checkerRow = true;
	//generate a random array of 15 numbers
	function randomnumbers(lowest,highest){
		var array= [];
		while(highest>= lowest) array.push(highest--)    
		array.sort(function(){return .5- Math.random()});  
		return array;
	}
	b=randomnumbers(0,14);
	//reset board
	while (n < 15){
		k=b[n];
		ex1.getElementsByTagName("div")[n].className = "puzzlepiece";
		settiles(ex1.getElementsByTagName("div")[n], k);
		setinitialcordinates(ex1.getElementsByTagName("div")[n],k);
		ex1.getElementsByTagName("div")[n].addEventListener("mouseout", hoverdivblack);
				ex1.getElementsByTagName("div")[n].addEventListener("mouseover", hoverdivred);

		ex1.getElementsByTagName("div")[n].addEventListener("click", movetile);
		n++;
	}
  
 });
});


function hoverdivblack(event) {

	posCol = getY(this);
	posRow = getX(this);
   var targetElement = event.target || event.srcElement;

	if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol){
	     console.log(targetElement);
	    targetElement.style.border = " solid black ";
	    console.log("black");
		
    }
   
    //---------------------Move right----------------------------
  
	if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol){
     	console.log(targetElement);
        targetElement.style.border = " solid black";
        console.log("black");	
	}
	//-------------------Move left-----------------------
  
	if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol){
	     console.log(targetElement);
	        targetElement.style.border = " solid black";
	        console.log("black");
   }
   
   //------------------------Move up------------------------
   if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol){
	     console.log(targetElement);
	        targetElement.style.border = " solid black";
	        console.log("black");
	  }
	
	   
 }



function hoverdivred(event) {

	posCol = getY(this);
	posRow = getX(this);
   var targetElement = event.target || event.srcElement;

	if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol){
	     console.log(targetElement);
	             	    targetElement.classList.add("movablepiece");

	    //targetElement.style.border = "thin solid red";
	    console.log("red");
		
    }
   
    //---------------------Move right----------------------------
  
	if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol){
     	console.log(targetElement);
     	        	    targetElement.classList.add("movablepiece");

        //targetElement.style.border = "thin solid red";
        console.log("red");	
	}
	//-------------------Move left-----------------------
  
	if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol){
	     console.log(targetElement);
	     targetElement.classList.add("movablepiece");

	        //targetElement.style.border = "thin solid red";
	        console.log("red");
   }
   
   //------------------------Move up------------------------
   if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol){
	     console.log(targetElement);
	       // targetElement.style.border = "thin solid red";
	              	    targetElement.classList.add("movablepiece");
 
	        console.log("red");
	  }
	
	   
 }

//------------POSSIBLE TILE TO BE MOVED------------------

var ptile= document.getElementsByTagName("div")[a];

//-------------SET CORDINATES FOR EACH PUZZLE PIECE---------------
function setinitialcordinates(elem, indx){
	var id = indx+1;
	//set column
	if ((id % 4) == 0){
		setY(elem,4);
	}
	else {
		setY(elem, (id %4));
	}
	//set row
	if ((id% 4) == 0){
		setX(elem, (id/4));
	}
	else {
		setX(elem, (Math.ceil(id/4)));
	}
	
}



//----------SET TILES ON THE BOARD--------------
function settiles(e, ind){
  var i = Math.floor(ind / 4);
  var j = ind % 4;
  var x = i * (400 / 4), y = j * (400 / 4);
  e.style.top = x + "px";
  e.style.left = y + "px";
}

//-----------ADD IMAGE TO BACKGROUND-------------
function addbackground(e, ind){
  var i = Math.floor(ind / 4);
  var j = ind % 4;
  var x = -i * (400/4) + "px";
  var y = -j * (400/ 4) + "px";
  e.style.backgroundPosition = y + " " + x;

}

//-------------set x(row) element for puzzlepiece----------
function setX(elem,num){
	elem.x = num;
}

//---------------set y(column) element for puzzlepiece---------
function setY(elem,num){
	
	elem.y=num;
}

//------------------get x(row) element for puzzlepiece--------------
function getX(elem){
	return elem.x;
}

//-------------get y(column) element for puzzlepiece---------
function getY(elem){
	return elem.y;
}

//-------------------move tiles up, down,left,right
function movetile(e){
	posCol = getY(this);
	posRow = getX(this);
	//---------------------Move Down-----------------------
	if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol){
		$(this).animate({
			top: "+="+"25%"
		});
		checkerRow = !checkerRow;
		emptytilePosRow-=1;
		setX(this,(getX(this)+1))
    }
   
    //---------------------Move right----------------------------
  
	if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol){
		$(this).animate({
			left : "+="+"25%"
		});
		checker = !checker;
		emptytilePosCol-=1;
		setY(this,(getY(this)+1));
	}
	//-------------------Move left-----------------------
  
	if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol){
		$(this).animate({
			left : "-=" + "25%"
		});
		checker = !checker;
		emptytilePosCol+=1;
		setY(this,(getY(this)-1));
   }
   
   //------------------------Move up------------------------
   if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol){
		$(this).animate({
			top: "-="+"25%"
		});
		checkerRow = !checkerRow;
		emptytilePosRow+=1;
		setX(this,(getX(this)-1))
   }
   
}
  
var h= document.getElementsByTagName('Body');

//-------------make the boxes be beside each other and the images be in them----------------------
let children = document.querySelectorAll("#puzzlearea div");//put in an array
// let shufflebutton = document.getElementById("shufflebutton");
 //console.log(children);
 let x=0;
 let y =0;
 //let count =0;
 //let space1= '300px';
 //let space2= '300px';
 //var b_ground;
 //var timer;
  var i;
  for ( i=0; i< children.length; i++)
  {
   /*children[i].classList.add("puzzlepiece");
   children[i].style.left = x+"px";  
   children[i].style.top = y+"px";
   children[i].style.backgroundPosition = `${-x}px ${-y}px`;
   x +=100;
   count +=1;
   if (count%4==0){
    	y+=100;
    	x=0;
   }
   children[i].addEventListener("mouseover",function(event){
        var targetElement = event.target || event.srcElement;
        console.log(targetElement);
        targetElement.style.border = "thin solid red";
        console.log("red");
    });
   children[i].addEventListener("mouseout",function(event){
        var targetElement = event.target || event.srcElement;
        console.log(targetElement);
        targetElement.style.border = "thin solid black";
        console.log("black");
    });*/
}
    function red(){
    	h[0].style.backgroundColor= "red";// background turn red
    }
      

    function black(){
    	h[0].style.backgroundColor= "black";// background turn red
   }




}

window.onload = function() {
	setEvents(); 
}
