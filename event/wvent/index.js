let h1 = document.querySelector('h1');
let s = document.querySelector('input');

s.addEventListener('input', function(event) {
    console.log('The event was triggered');
    h1.innerText = this.value;
    
});