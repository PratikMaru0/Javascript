const mainButton = document.querySelector("button");

// console.log(mainButton);

const body = document.body;

// Math.floor(Math.random() * 255);  This sentance means we'll get random number from 0 to 255.

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}


let temp = document.querySelector("h1");

mainButton.addEventListener("click",()=>{
    let random = randomColorGenerator();
    body.style.backgroundColor = random;
    temp.textContent = `Current Color : ${random}`;    
});

