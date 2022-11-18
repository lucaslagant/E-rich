let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let deg = 0;

spinBtn.addEventListener("click", () =>{
    
    deg = Math.floor( 5000 + Math.random() * 5000);
    
    wheel.style.transition = 'all 8s ease';
    wheel.style.transform = `rotate(${deg}deg)`;
});