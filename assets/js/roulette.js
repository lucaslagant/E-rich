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
        console.log(actualdeg);
    
        wheel.style.transform = `rotate(${actualdeg}deg)`;
        let element = document.getElementById('result');

        if (actualdeg >= 0 && actualdeg < 10 ) {
            document.getElementById('resul').textContent = "26 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");

        }
        if (actualdeg >= 10 && actualdeg < 20) {
            document.getElementById('result').textContent = "3 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 20 && actualdeg < 30) {
            document.getElementById('result').textContent = "35 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 30 && actualdeg < 39) {
            document.getElementById('result').textContent = "12 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 39 && actualdeg < 49) {
            document.getElementById('result').textContent = "28 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 49 && actualdeg < 59) {
            document.getElementById('result').textContent = "7 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 59 && actualdeg < 69) {
            document.getElementById('result').textContent = "29 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 69 && actualdeg < 79) {
            document.getElementById('result').textContent = "18 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 79 && actualdeg < 89) {
            document.getElementById('result').textContent = "5 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 89 && actualdeg < 99) {
            document.getElementById('result').textContent = "22 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 99 && actualdeg < 109) {
            document.getElementById('result').textContent = "9 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 109 && actualdeg < 119) {
            document.getElementById('result').textContent = "31 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 119 && actualdeg < 129) {
            document.getElementById('result').textContent = "14 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 129 && actualdeg < 139) {
            document.getElementById('result').textContent = "20 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 139 && actualdeg < 149) {
            document.getElementById('result').textContent = "1 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 149 && actualdeg < 159) {
            document.getElementById('result').textContent = "33 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 159 && actualdeg < 169) {
            document.getElementById('result').textContent = "16 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 169 && actualdeg < 179) {
            document.getElementById('result').textContent = "24 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 179 && actualdeg < 189) {
            document.getElementById('result').textContent = "5 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 189 && actualdeg < 199) {
            document.getElementById('result').textContent = "10 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 199 && actualdeg < 209) {
            document.getElementById('result').textContent = "23 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 209 && actualdeg < 219) {
            document.getElementById('result').textContent = "8 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 219 && actualdeg < 229) {
            document.getElementById('result').textContent = "30 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 229 && actualdeg < 239) {
            document.getElementById('result').textContent = "36 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 239 && actualdeg < 249) {
            document.getElementById('result').textContent = "36 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 249 && actualdeg < 259) {
            document.getElementById('result').textContent = "13 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 259 && actualdeg < 269) {
            document.getElementById('result').textContent = "6 ROUGE";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 269 && actualdeg < 279) {
            document.getElementById('result').textContent = "27 NOIR";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 279 && actualdeg < 289) {
            document.getElementById('result').textContent = "34 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 289 && actualdeg < 299) {
            document.getElementById('result').textContent = "17 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 299 && actualdeg < 309) {
            document.getElementById('result').textContent = "25 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 309 && actualdeg < 319) {
            document.getElementById('result').textContent = "21 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 319 && actualdeg < 329) {
            document.getElementById('result').textContent = "21 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg >= 329 && actualdeg < 339) {
            document.getElementById('result').textContent = "4 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 339 && actualdeg < 349) {
            document.getElementById('result').textContent = "15 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 349 && actualdeg < 359) {
            document.getElementById('result').textContent = "15 ROUGE";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
        }
        if (actualdeg >= 359 && actualdeg < 360) {
            document.getElementById('result').textContent = "32 NOIR";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
        }
        if (actualdeg == 360 ) {
            document.getElementById('result').textContent = "0 VERT";
            element.classList.remove("red");
            element.classList.remove("black");
            element.classList.add("green");
        }
    })    
})();

let replay = document.getElementById("replay");
replay.addEventListener("click", function() {
    window.location.reload();
})