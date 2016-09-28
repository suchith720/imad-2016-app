console.log('Loaded!');
//CHANGE THE TEXT OF MAIN-TEXT DIV
var element=document.getElementById('main-text');
element.innerHTML='SUCHITH PRABHU';

//move image
var img=document.getElementById('dino');
var marginLeft =0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function (){
    var interval= setInterval(moveRight,100);
};