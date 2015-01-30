var date = new Date();
var day = date.getDay(); 
var hour = date.getHours();
var minutes = date.getMinutes();

// run only once the document has loaded
window.onload = init;

function init(){
  // the div that will hide the page
  var shield = document.getElementById('shield');

  if(day == 5 && hour > 17 || day == 6 && hour < 18){
    shield.style.display = 'block'
  }
  else {
    shield.style.display = 'none'
  }
}
