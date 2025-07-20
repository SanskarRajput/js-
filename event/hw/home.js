let btn = document.querySelector('button');
// let para = document.querySelector('p');

// btn.addEventListener('click' , function(){
//     if(para.style.backgroundColor === 'red'){
//         para.style.backgroundColor = 'green';
//     }else{
//         para.style.backgroundColor = 'red';
//          console.log("the button is clicked");

//     }
// })


// let p = new Promise ( (resolve , reject) => {
//     console.log("its pending");
//     setTimeout( ()=>{
//         alert("i am a promise and its fullfites ");
//         resolve("its worling");

//     },5000)
// })

// console.log(p);

let p = document.querySelector('h1');


function changecolour(colour,delay){
    setTimeout(() =>{
        p.style.color = colour;        
    }, delay);
}

changecolour("red", 1000);
changecolour("green", 2000);
changecolour("yellow", 3000);