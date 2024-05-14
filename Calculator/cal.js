function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function calculate(){
    var exp = document.getElementById('display').value;
    var result = eval(exp);
    document.getElementById('display').value = result;
}
function ClearDisplay(){
    document.getElementById('display').value = '';
}