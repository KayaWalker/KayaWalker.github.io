function check() {
    console.log('test');
}

function submit() {
    alert('Your volume is now: ' + output.textContent);
    outputInt = 0;
    output.textContent = outputInt;
}

function random() {
    outputInt = randomNumber(0, 50);
    output.textContent = Number(output.textContent) + outputInt;
    if(Number(output.textContent) > 100)
    {
        alert('BUST. Haha loser.')
        outputInt = 0;
        output.textContent = outputInt;
    }
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);