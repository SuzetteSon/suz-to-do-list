const addButtonFunc = () => {

    const todoSection = document.querySelector('.to-do');
    const newItem = document.createElement('div');
    newItem.classList.add("input-group");
    newItem.classList.add("mb-4");
    newItem.setAttribute("draggable", true);
    newItem.setAttribute("ondragstart", "drag(event)");
    newItem.setAttribute("id", "drag1");


    const inputGroupPrepend = document.createElement('div')
    inputGroupPrepend.classList.add('input-group-prepend')
    const mySpan = document.createElement('span');
    mySpan.classList.add('input-group-text')
    const textArea = document.createElement('textarea');
    textArea.classList.add('form-control');
    mySpan.innerHTML += "#";
    todoSection.appendChild(newItem);
    newItem.appendChild(inputGroupPrepend);
    newItem.appendChild(textArea);
    inputGroupPrepend.appendChild(mySpan);

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn-outline-info');
    removeButton.classList.add('btn-sm');
    removeButton.innerHTML += "Remove";
    removeButton.setAttribute("onclick", "removeDummy()");
    newItem.appendChild(removeButton);
}

allowDrop = ev => {
    ev.preventDefault();
}

drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
}

drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

removeDummy = () => {
    var elem = document.getElementById('drag1');
    console.log(elem);
    elem.parentNode.removeChild(elem);
}