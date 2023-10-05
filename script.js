const element = document.querySelector('#text-area');

function uppercase() {
    element.value = element.value.toUpperCase();
}

function lowercase() {
    element.value = element.value.toLowerCase();
}

function capitalize() {
    const words = element.value.split(' ');
    const capitalize = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    element.value = capitalize.join(' ');
}

function removeSpace() {
    const text = element.value;
    element.value = text.split(' ').join("");
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

function clean() {
    element.value = "";
}