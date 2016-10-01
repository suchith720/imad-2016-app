

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