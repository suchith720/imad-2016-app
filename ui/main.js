console.log('Loaded!');
//CHANGE THE TEXT OF MAIN-TEXT DIV
var element=document.getElementById('main-text');
element.innerHTML='SUCHITH PRABHU';

//move image
var img=document.getElementById('dino');
var marginLeft =0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function (){
    var interval= setInterval(moveRight,50);
};


var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
  //Make a request to the counter endpoint
  
  // Capture the response and store it in variable
  
  //render the variable in the correct span
  counter=counter+1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};