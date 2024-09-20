var input = document.querySelector(`#assing`);
var button = document.querySelector(`#btn`);
var ol = document.querySelector(`ol`);

var array = [];

function repeat() {
    ol.innerHTML = ``;
    for (var i = 0; i < array.length; i++) {
        ol.innerHTML += `
        <li> ${array[i]}
        <button onclick="delet(${i})"> Delete</button>
        <button onclick="edit(${i})"> Edit</button>
        </li>
        `;
    }
}

function addvalue() {
    array.push(input.value);
    repeat();
    input.value = ``; 
}

function delet(index) {
    array.splice(index, 1);
    repeat();
}

function edit(index) {
    var edited = prompt(`enter edited value`);
    array.splice(index, 1, edited);
    repeat();
}
