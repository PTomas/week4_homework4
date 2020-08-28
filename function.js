var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");

var score;
var counter =0;

function startFunction() {
    //var x = document.getElementById("jumboLink");
    if (a.style.display === "block") {
      a.style.display = "block";
      b.style.display = "none";
      c.style.display = "none";
    } else {
      b.style.display = "block";
      a.style.display = "none";
      c.style.display = "none";
    }
}

document.getElementById("b").style.display = "none";
  function next1() {
    //var y = document.getElementById("photoLink");
    
    if (b.style.display === "block") {
        c.style.display = "none";
        a.style.display = "none";
        b.style.display = "block";
    } else {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
    }
  }

  document.getElementById("c").style.display = "none";
  function photoFunction() {
    //var y = document.getElementById("photoLink");
    
    if (c.style.display === "block") {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
    }
  }

  function startFunction(){
    var paragraph= $("<p>");
    paragraph.text("Score:"+ counter);
    $(".header").append(paragraph);
  }

  function counterUp(){
    counter++
    console.log(counter)
}

  function next1(){
      if (counter>=1){
        localStorage.score= 1;
        console.log(localStorage)
      }
  }

function startFunction(){
  var seconds = 0;
  var interval ;
  function timer(mins) {
      seconds = mins*60 || 0;     
      interval = setInterval(function() {

      seconds--;
      if(!seconds){
       clearInterval(interval); 
       alert("times up");
      }
      },1000)
  }

  var time = $("<p>");
  time.text(interval);
  $(".header").append(time);
  
}
  
