const increaseButton  =document.getElementById(`increaseButton`);
const decreaseButton  =document.getElementById(`decreaseButton`);
const resetButton  =document.getElementById(`resetButton`);
const screen = document.getElementById(`CountScreen`);
let count = 0;

increaseButton.addEventListener(`click` , increase);
decreaseButton.addEventListener(`click`, decrease);
resetButton.addEventListener(`click` , reset);
function increase(){
    count++;
    screen.textContent = count;
}
function decrease(){
    count--;
    screen.textContent = count;
}
function reset(){
    count = 0;
    screen.textContent = count;
}
