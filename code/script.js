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

    
    var arrayLength = parts.length
    
    for (let i=0; i < arrayLength; i++){

    var createItem = document.createElement("span");
    createItem.textContent = parts[i];
    console.log(createItem);
    items_div.appendChild(createItem);



        console.log("items div = ");
        console.log(items_div);
        console.log("parts array = ");
        console.log(parts);
}

function spanFunction(){
    onclick.items_span = (" ")

}

}


// voer alleen code uit als de gehele pagina is ingeladen
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // Initialize your application or run some code.
        showArray()
    }
}

