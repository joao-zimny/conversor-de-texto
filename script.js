const element = document.querySelector('#text-area');
const temp = [];

function uppercase() {
    temp.push(element.value);
    element.value = element.value.toUpperCase();
}

function lowercase() {
    temp.push(element.value);
    element.value = element.value.toLowerCase();
}

function capitalize() {
    temp.push(element.value);
    const words = element.value.split(' ');
    const capitalize = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    element.value = capitalize.join(' ');
}

function removeSpace() {
    temp.push(element.value);
    const text = element.value;
    element.value = text.split(' ').join("");
}

function undo() {
    const ult = temp[temp.length - 1];
    element.value = ult;
    console.log(ult);
}

function clean() {
    element.value = "";
}

function copy() {
    element.select();
    document.execCommand('copy');

    // TODO: Pop-up
    // const modal = document.querySelector('dialog');
    // modal.show();
    // const modalClose = document.querySelector('dialog button');
    // modalClose.onclick = function() {
    //     modal.close();
    // }
}