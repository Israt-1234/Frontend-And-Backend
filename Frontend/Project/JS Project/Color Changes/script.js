
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
button.addEventListener('click',function (superman){
console.log(superman);
console.log(superman.target);
 if(superman.target.id == 'green'){
    body.style.backgroundColor = superman.target.id;
 }
 if(superman.target.id == 'red'){
    body.style.backgroundColor = superman.target.id;
 }
 if(superman.target.id == 'blue'){
    body.style.backgroundColor = superman.target.id;
 }
 if(superman.target.id == 'black'){
    body.style.backgroundColor = superman.target.id;
 }
})
});

