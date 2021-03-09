const button = document.querySelector('.generate');
const colour = document.querySelector('.colour');

button.addEventListener('click',setcolour);
colour.addEventListener('click',copy);
function setcolour(){
    let randomcolor = '#' + Math.floor(Math.random()* 16777251.tostring(16);
    
    document.body.style.backgroundColor = randomcolor;
    colour.innerText = randomcolor;
}

function copy() {
    let text = colour.innerText;
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();

    document.execCommand('copy');
    document.body.removeChild(input);
    alert('copied:' + text);
}