(function() {
 
    const wheel = document.getElementById('wheel');
    const startButton = document.getElementById('play');
    let deg = 0;

    startButton.addEventListener("click", () =>{

        startButton.getElementsByClassName.pointerEvents = 'none';

        deg = Math.floor(5000 + Math.random()*5000);

        wheel.style.transition = 'all 10s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () =>{
        wheel.classList.remove('blur');
        startButton.getElementsByClassName.pointerEvents = 'auto';
        wheel.style.transition = 'none';
    
        const actualdeg = deg%360;
    
        wheel.style.transform = `rotate(${actualdeg}deg)`;
        let element = document.getElementById('result');

        if (actualdeg >= 0 && actualdeg < 10 ) {
            document.getElementById('resul').textContent = "26 noir";

            document.classList.remove("green");
            document.classList.remove("red");
            document.classList.add("black");

        }
    })    
})();

let replay = document.getElementById("replay");
replay.addEventListener("click", function() {
    window.location.reload();
})