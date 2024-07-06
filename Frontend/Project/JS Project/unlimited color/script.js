const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i<6 ; i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
// console.log(randomcolor());
let interval;
const startchangecolor = function(){
    if(!interval){
        interval = setInterval(changeBackgroundcolor, 1000);
    }
    function changeBackgroundcolor(){
        document.body.style.backgroundColor = randomcolor();
    }
}

const stopchangecolor = function(){
  clearInterval(interval)
    interval = null;
}

document.querySelector("#start").addEventListener('click', startchangecolor);
document.querySelector("#stop").addEventListener('click', stopchangecolor);