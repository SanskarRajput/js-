let btn = document.querySelector('button');
let para = document.querySelector('p');

btn.addEventListener('click' , function(){
    if(para.style.backgroundColor === 'red'){
        para.style.backgroundColor = 'green';
    }else{
        para.style.backgroundColor = 'red';
    }
})