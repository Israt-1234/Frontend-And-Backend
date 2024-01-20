document.getElementById('turnon').addEventListener('click',trunonlight);
document.getElementById('turnoff').addEventListener('click',trunofflight);

function trunonlight(){
    document.getElementById('myimage').src='turn on.jpg';
}

function trunofflight(){
    document.getElementById('myimage').src='turn off.jpg';
}

