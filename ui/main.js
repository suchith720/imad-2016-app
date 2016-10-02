

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



var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
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
            //caputre name and render it as a list
    	    var names = request.responseText;
	        names = JSON.parse(names);
            list = '';
            for(var i=0;i<name.length;i++)
    	    {
              list += '<li>' + names[i] + '</li>';
            }
            var ul= document.getElementById('namelist');
            ul.innerHTML=list;  
          }
          // Not done
      }
      
  };

  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  // Make request
  request.open('GET','http://suchith720.imad.hasura-app.io/submit-name?name='+ name ,true);
  request.send(null);
    
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
