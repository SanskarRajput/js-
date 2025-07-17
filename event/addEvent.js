// let but = document.querySelector('button');

// but.addEventListener('dbclick', function(){
    
//     console.log("shnau");
// });

// let s = document.querySelector('#placeholder');
// s.addEventListener('keydown' , function(event){
//     console.log(event.key);
//     console.log(event.code)
// })

let fm = document.querySelector('form');
fm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let name = document.querySelector('#name');
    console.log(name.value);

});