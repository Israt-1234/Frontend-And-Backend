const root = document.getElementById('root');
const btn1 = document.getElementById('change-button');
const output = document.getElementById('output');
btn1.addEventListener('click', function(){
    const bgcolor = hexadecimal()
    root.style.backgroundColor = bgcolor;
    output.value = bgcolor;
});

function hexadecimal(){
       const red = Math.floor(Math.random()*255);
       const green = Math.floor(Math.random()*255);
       const blue = Math.floor(Math.random()*255);

     const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}${blueHex}`;
}

