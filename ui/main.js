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
  //Create a  request Object
  var request = new XMLHttpRequest();
  
  
  // Capture the response and store it in variable
  request.onstatechange= function()
  {
      if(request.readyState === XmlhttpRequest.DONE)
      {
          //Take some action
          if(request.status === 200)
          {
              var counter= request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
          // Not done
      }
      
  };
  
  // Make request
  request.open('GET',"http://suchith720.imad.hasura-app.io/counter",true);
  request.send(null);
};