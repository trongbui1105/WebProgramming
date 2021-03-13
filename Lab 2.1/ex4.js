var error = document.getElementById('error');
var answer = document.getElementById('answer');
var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var delta = document.getElementById('delta');

function solveEquation() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var c = document.getElementById("C").value;

    if (a == 0) {
        error.innerHTML = "A phải khác 0!";
        document.getElementById("A").value = "";
        document.getElementById("A").focus();
        return;
    } else {
        var d = b*b - 4*a*c;
        delta.innerHTML = d;
        if (d > 0) {
            answer.innerHTML = "Phương trình có 2 nghiệm phân biệt";
            var root1 = (-b + Math.sqrt(d)) / (2*a);
            var root2 = (-b - Math.sqrt(d)) / (2*a);
            x1.innerHTML = root1;
            x2.innerHTML = root2;
            delta.innerHTML = d + ', > 0';
        } else if (d === 0) {
            answer.innerHTML = "Phương trình có nghiệm kép";
            var root = -b/(2*a);
            x1.innerHTML = root;
            x2.innerHTML = root;
        } else {
            answer.innerHTML = "Phương trình vô nghiệm";
            x1.innerHTML = 'NaN';
            x2.innerHTML = 'NaN';
            document.getElementById("A").value = "";
            document.getElementById("B").value = "";
            document.getElementById("C").value = "";
        }
    }
}


var submitButton = document.getElementById('submit');
submitButton.onclick = function() {
    solveEquation();
};

