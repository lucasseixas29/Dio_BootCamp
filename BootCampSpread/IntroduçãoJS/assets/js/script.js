
 var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var menos = document.getElementById("menos")
var mais = document.getElementById("mais")
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10) {
     currentNumber = 0
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber <0) {
    currentNumber = 0
    }
}
mais.addEventListener('click',increment)
menos.addEventListener('click', decrement)
