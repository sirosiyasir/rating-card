
document.querySelector(".butnSubmit").addEventListener("click",function (){
  var text1 = document.querySelector(".firstText");
  var text2 = document.querySelector(".secondText");

  if(text2.style.display === "none"){
    text2.style.display = "block";
    text1.style.display = "none";
  }

})



  document.querySelector(".butn1").addEventListener("click", butnFunction);
  function butnFunction (){
    document.querySelector(".butn1").style.backgroundColor ="hsl(25, 97%, 53%)";
}




// var i = 0;
// while (i<5){
// i++;
// var deneme = ".butn" + i;
// //First Button
document.querySelector(".butn1").addEventListener("click", function (){

document.querySelector(".yourSelectText").innerHTML = "you selected 1 out of 5";

})

//Second Button
document.querySelector(".butn2").addEventListener("click", function (){

document.querySelector(".yourSelectText").innerHTML = "you selected 2 out of 5";

})

//Third Button
document.querySelector(".butn3").addEventListener("click", function (){

document.querySelector(".yourSelectText").innerHTML = "you selected 3 out of 5";

})

//Fourth Button
document.querySelector(".butn4").addEventListener("click", function (){

document.querySelector(".yourSelectText").innerHTML = "you selected 4 out of 5";

})

//Fifth Button
document.querySelector(".butn5").addEventListener("click", function (){

document.querySelector(".yourSelectText").innerHTML = "you selected 5 out of 5";

})
