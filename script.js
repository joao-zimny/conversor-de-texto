const element = document.querySelector('#text-area');

function uppercase() {
    const element = document.querySelector('#text-area');
    element.value = element.value.toUpperCase();
}

function lowercase() {
    const element = document.querySelector('#text-area');
    element.value = element.value.toLowerCase();
}

function capitalize() {
    const element = document.querySelector('#text-area');
    const words = element.value.split(' ');
    const capitalize = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    element.value = capitalize.join(' ');
}

function removeSpace() {
    const element = document.querySelector('#text-area');
    const text = element.value;
    element.value = text.split(' ').join("");
}

function copy() {
    const element = document.querySelector('#text-area');
    var texto = document.getElementById('text-area');
    texto.select();
    document.execCommand('copy');

    // Pop-up
    const modal = document.querySelector('dialog');
    modal.show();
    const modalClose = document.querySelector('dialog button');
    modalClose.onclick = function() {
        modal.close();
    }
    
}

