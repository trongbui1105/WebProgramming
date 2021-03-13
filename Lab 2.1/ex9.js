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

function changeTheme() {
    var changeCSS = document.getElementById('changeCSS');
    if (changeCSS.value === 'defaultCSS') {
        document.getElementById('themeCSS').href = "ex9.css";
    }
    
    else if (changeCSS.value === 'darkCSS') {
        document.getElementById('themeCSS').href = "dark.css";
    }
    
    else {  
        document.getElementById('themeCSS').href = "colorful.css";
    }
}
