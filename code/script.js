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

