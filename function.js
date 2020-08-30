var a = document.getElementById("questionA");
var b = document.getElementById("questionB");
var c = document.getElementById("questionC");
var d = document.getElementById("questionD");
var e = document.getElementById("questionE");


var score;
var counter = 0;
var correct1;
var correct2;
var correct3;
var correct4;



      $("questionB").detach();
      $("questionC").detach();
      $("questionD").detach();
      $("questionE").detach();
function startFunction() {

  var startMinutes = 20;
  var time = startMinutes*60;

  var countdownEl = document.getElementById("countdown")

  setInterval(updateCountdown, 1000);

    function updateCountdown() {
      var min = Math.floor(time/60);
      var seconds = time % 60;
  
      countdownEl.innerHTML = '${minutes}: ${seconds}';
      time--;
    }

    //var x = document.getElementById("jumboLink");
    $("questionA").detach();

    var paragraph= $("<p>");
    paragraph.attr("style", "color:" + black);
    $(".body").append(paragraph);
    paragraph.text(b)
    
}

document.getElementById("b").style.display = "none";
  function next1() {

    if(correct1==true){
      counter++
      localStorage.score= counter;
      var paragraph= $("<p>");
      paragraph.text("Score:"+ counter);
      $(".header").append(paragraph);
    }

    //var y = document.getElementById("photoLink");
    $("questionB").detach();


    var paragraph= $("<p>");
    paragraph.attr("style", "color:" + black);
    $(".body").append(paragraph);
    paragraph.text(c)
  }

  document.getElementById("c").style.display = "none";
  function next2() {

    if(correct1==true){
      counter++
      localStorage.score= counter;
      var paragraph= $("<p>");
      paragraph.text("Score:"+ counter);
      $(".header").append(paragraph);
    }

    //var y = document.getElementById("photoLink");
    $("questionC").detach();


    var paragraph= $("<p>");
    paragraph.attr("style", "color:" + black);
    $(".body").append(paragraph);
    paragraph.text(d)
    
  }

  document.getElementById("d").style.display = "none";
  function next3() {
    //var y = document.getElementById("photoLink");
    $("questionD").detach();


    var paragraph= $("<p>");
    paragraph.attr("style", "color:" + black);
    $(".body").append(paragraph);
    paragraph.text(e)
  }

  document.getElementById("e").style.display = "none";
  function next4() {
    //var y = document.getElementById("photoLink");
    $("questionE").detach();

    
    var paragraph= $("<p>");
    paragraph.attr("style", "color:" + black);
    $(".body").append(paragraph);
    paragraph.text(e)
  }

var correctAnswer = document.querySelector("input[name=exampleRadios1]");
correctAnswer.addEventListener("change", score1);

  function score1(){
    correct1 == true;
    console.log(correct1);
    
    
  }

  var correctAnswer = document.querySelector("input[name=exampleRadios3]");
correctAnswer.addEventListener("change", score2);

  function score2(){
    correct2 == true;
    console.log(correct2);
    
    
  }

  var correctAnswer = document.querySelector("input[name=exampleRadios4]");
correctAnswer.addEventListener("change", score3);

  function score3(){
    correct3 == true;
    console.log(correct3);
    
    
  }

  var correctAnswer = document.querySelector("input[name=exampleRadios]");
correctAnswer.addEventListener("change", score4);

  function score4(){
    correct4 == true;
    console.log(correct4);
    
    
  }
  


  
