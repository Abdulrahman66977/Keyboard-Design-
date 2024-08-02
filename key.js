let display = document.getElementById('display')
function pressKey(key) {
    if (key ==='=') {
        calculate();
    } else if (key === 'C') {
        clearDisplay();
    } else {
        display.value +=key;
    } 
}
function clearDisplay(){
    display.value ="";
}
function calculate() {
    try{
        const expression = display.value;
        const result = eval(expression);
        display.value = result;
           } catch (e) {
        display.value = 'Error';
     }
}
document.addEventListener('keydown', function(event) {
    if(event.key >=0 && event.key <=9) {
        pressKey(event.key);
    } else if (event.key ==='+') {
        pressKey('+');
    } else if (event.key ==='-') {
        pressKey('-');
    } else if (event.key ==='*') {
        pressKey('*');
    } else if (event.key ==='/') {
        pressKey('/');
    } else if (event.key==='=') {
        calculate();
    } else if (event.key ==='Backspace') {
        clearDisplay();
    }
})