//!sample code!

//draggable element 
const item = document.querySelector('.draggableBox');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


 //drop targets 
const boxes = document.querySelectorAll('.drumKitLayout');

boxes.forEach(draggableBox => {
    draggableBox.addEventListener('dragenter', dragEnter)
    draggableBox.addEventListener('dragover', dragOver);
    draggableBox.addEventListener('dragleave', dragLeave);
    draggableBox.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById("draggableBox");

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
