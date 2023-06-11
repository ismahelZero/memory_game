function loadScript(src){
    var el = document.createElement("script");
    el.src = src;
    document.body.appendChild(el);
}




let a = localStorage.getItem('a1');


if(a == 'true')
{
    
    loadScript('script.js');
   
    
}
else if (a == 'false')
{
    loadScript('script2.js');
  
}

document.getElementById('player1').addEventListener("click", function() {
    localStorage.setItem('a1' ,true);
});


document.getElementById('player2').addEventListener("click", function() {
    localStorage.setItem('a1' ,false);
});