

//XMLHttprequest part - API 

var button = document.getElementById('counter');

button.onclick = function(){
  //Create a  request Object
  var request = new XMLHttpRequest();
  
  
  // Capture the response and store it in variable
  request.onreadystatechange = function()
  {
      if(request.readyState === XMLHttpRequest.DONE)
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
  request.open('GET','http://suchith720.imad.hasura-app.io/counter',true);
  request.send(null);
};


// Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    
    //caputre name and render it as a list
    var name = ['name1','name2','name3'];
    list = '';
    for(var i=0;i<name.length;i++)
    {
        list += '<li>' + name[i] + '</li>';
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML=list;
};




/* p5 practical
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
*/