/* Begining of Maze.js  */

function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = "https://courses.cs.washington.edu/courses/cse190m/09sp/labs/6-maze/prototype.js"; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}


window.onload = function(){

$("start").observe("mouseover", beginGame);
$("start").observe("click", reStart);
$("end").observe("mouseover", gameOver);
//$("maze").observe("mouseout", cheat);
    
    
};



var status;


 var wallBoundary = $$("div#maze div.boundary"); 
    for (var i = 0; i < wallBoundary.length; i++) {
        wallBoundary[i].observe( "mouseover", hitBoundary);
}





function beginGame(){
    status="1";
     $("status").textContent = "Exit Maze!";
     
     var wallBoundary = $$("div#maze div.boundary");
     
     for (var i = 0; i < wallBoundary.length; i++) {
         
        wallBoundary[i].observe( "mouseover", hitBoundary);
}
     gameOver;

}



function reStart()
{
	location.reload();
}


function hitBoundary(){
    
     status="0";
     $("status").textContent="Sorry, You Lose !";
	 var wallBoundary = $$("div#maze div.boundary");
     
	 for (var n = 0; n < wallBoundary.length; n++) {
	     
		     wallBoundary[n].observe("mouseover" , wallBoundary[n].style.backgroundColor = "#ff8888");
		    }

    gameOver;
}


function gameOver(){
    if( status=="0") {
    $("status").textContent="Sorry, You Lose !";
}
else{
    $("status").textContent= "Congrats, You Won!";
}
}



/* End of maze.js */

