const cores = ["green", "red", "yellow", "blue", "pink", "purple", "orange", "black", "brown", "gray", "white", "violet", "indigo", "gold", "silver", "cyan", "magenta", "lime", "maroon", "navy", "olive", "teal", "aqua", "fuchsia", "crimson", "coral", "khaki", "lavender", "plum", "turquoise", "beige", "azure", "bisque", "chocolate", "coral", "crimson", "cyan", "fuchsia", "gold", "gray", "green", "indigo", "ivory", "khaki", "lavender", "lime", "magenta", "maroon", "navy", "olive", "orange", "pink", "plum", "purple", "red", "salmon", "silver", "teal", "turquoise", "violet", "wheat", "white", "yellow"];
const btn = document.getElementById('btn');
const cor = document.querySelector('.cor');

btn.addEventListener('click', function (){
    const numeroAleatorio = getRandomNumber();
    console.log(numeroAleatorio);
    document.body.style.backgroundColor = cores[numeroAleatorio];
    cor.textContent = cores[numeroAleatorio];
});

function getRandomNumber(){
    return Math.floor(Math.random() * cores.length);
}
