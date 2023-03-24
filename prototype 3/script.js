
function allowDrop(allowdropevent) {
  //allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}
  
function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  //dragevent.target.style.color = "green";
}
  
function drop(dropevent) {
  dropevent.preventDefault();
  const data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
    // document.getElementById("drag").style.color = "red";
}

document.addEventListener("DOMContentLoaded", function() {
  var result = []; 
  var matches = document.querySelectorAll("#drum_kit_layout_scripter div");
  for (var i = 0, l = matches.length; i < l; i++){
    result.push(matches[i].getAttribute("id")); 
  }
  console.log(result);
});