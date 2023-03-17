//JS start template

//array voor drumKit, bestaande uit de onderdelen die je met een loop moet ophalen in selected items

const parts = [
  "High-Hat",
  "Snare",
  "Kick",
  "Crash",
  "Ride",
  "Tom1",
  "Tom2",
  "Floor-Tom"
];

function showArray() {
  var items_div = document.getElementById("Items");
  var arrayLength = parts.length;

  for (let i = 0; i < arrayLength; i++) {
      var createItem = document.createElement("div");
      createItem.setAttribute("id", parts[i]);
      createItem.textContent = parts[i];
      items_div.appendChild(createItem); 
  }

  console.log("items div = ");
  console.log(items_div);
  console.log("parts array = ");
  console.log(parts);
  

  //Haal hier index nummers op
  console.log("index = ");
  console.log(parts.indexOf/*insert parts variable name between blue brackets . Dont forget quotes.*/("Tom1"));
  
  
}


function dragElement(elmnt) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    
  if (document.getElementById(elmnt.id)) {
      document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  
  } else {
      elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
      
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

      
  }

  function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
  }
 
}


document.addEventListener("DOMContentLoaded", function() {
  showArray();
  var arrayLength = parts.length;
  for (let i = 0; i < arrayLength; i++) {
      dragElement(document.getElementById(parts[i]));
  }
});


