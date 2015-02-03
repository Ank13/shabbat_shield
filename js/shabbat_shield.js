var date = new Date();
var day = date.getDay(); 
var hour = date.getHours();
var minutes = date.getMinutes();
// run only once the document has loaded
window.onload = init;

function init(){
  // the div that will hide the page
  var shield = document.getElementById('shield');
  // specify the day/time combinations. Next step, read times from a table based on the date. 
  if(day == 5 && hour >= 13 || day == 6 && hour <= 18){
    shield.style.display = 'block'
  }
  else {
    shield.style.display = 'none'
  }
}

// Alternatively, you could overwrite the body