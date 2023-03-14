const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const cor = document.querySelector('.cor');

btn.addEventListener('click', function (){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    cor.textContent = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}