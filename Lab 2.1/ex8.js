function cal(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

document.getElementById('=').onclick = function() {
    var result = document.getElementById('result');
    result.value = eval(result.value);
}