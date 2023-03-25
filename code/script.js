//JS start template

//array voor drumKit, bestaande uit de onderdelen die je met een loop moet ophalen in selected items

// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function showArray(){
    const parts = [
        "high-hat",
        "snare",
        "kick",
        "crash",
    ]



    var items_div = document.getElementById("Items");

    //hier for-loop schrijven: met de for-loop lijn 20 tot en met 23 aanspreken (dit komt in de for loop, hiermee looped hij door de array heen en heb je spans voor alle indexitems)

    //var createItem = document.createElement("span");
    //createItem.textContent = parts[i];
    //console.log(createItem);
    //items_div.appendChild(createItem);

        console.log("items div = ");
        console.log(items_div);
        console.log("parts array = ");
        console.log(parts);
}

function spanFunction(){
    onclick.items_span = (" ")

}

// voer alleen code uit als de gehele pagina is ingeladen
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // Initialize your application or run some code.
        showArray()
    }
}

/*Chat GPT advies for-loop

Voor het uitvoeren van de for-loop, zou je het volgende kunnen doen:


for (let i = 0; i < parts.length; i++) {
    var createItem = document.createElement("span");
    createItem.textContent = parts[i];
    createItem.setAttribute("class", "drumpart");
    createItem.addEventListener("click", spanFunction);
    items_div.appendChild(createItem);
}
Voor de spanFunction zou je bijvoorbeeld het volgende kunnen schrijven:


function spanFunction(event) {
    console.log(event.target.textContent + " clicked");
}
Dit zorgt ervoor dat bij het klikken op een van de span-elementen de tekst van het geklikte element in de console wordt weergegeven.

Let er wel op dat dit slechts een basis is, en je zult zelf nog verder moeten werken aan de functionaliteit van de app.

optie 2 met forEach

parts.forEach(function(part) {
  var createItem = document.createElement("span");
  createItem.textContent = part;
  items_div.appendChild(createItem);
});

*/

