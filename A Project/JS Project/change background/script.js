
const root = document.getElementById('root')
const btn = document.getElementById('change-btn');


btn.addEventListener('click',function(){
const bgcolor = genrenratecolor()
root.style.backgroundColor = bgcolor;
});


function genrenratecolor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
   
    return `rgb(${red}, ${green}, ${blue})`;
}