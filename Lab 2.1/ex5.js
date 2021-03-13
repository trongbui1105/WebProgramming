function validateEmail(inputText) {
    var mailformat = /\S+@\S+\.\S+/;
    if(!inputText.value.match(mailformat)) {
        document.getElementById('errorOfEmail').innerHTML = "You have entered a invalid email address!";
    } else {
        document.getElementById('errorOfEmail').innerHTML = "";
    }
}

function validateZipCode(code) {
    var regexp = /^\d{5}$/;
    if (!regexp.test(code.value)){
        document.getElementById('errorOfZIPCode').innerHTML = "You have entered a invalid ZIP code!"; 
    } else {
        document.getElementById('errorOfZIPCode').innerHTML = "";
    }
}

function validateSex() {
    var male = document.getElementById('Male');
    var female = document.getElementById("Female");

    if(!male.checked && !female.checked) {
        document.getElementById('errorOfSex').innerHTML = "You must select male or female";
    } else {
        document.getElementById('errorOfSex').innerHTML = "";
    }
}

function checkEmpty() {
    var inputs = document.getElementsByClassName("check")
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ""){
            alert('Input can not be left blank');
            return true;
        }
    }

    var male = document.getElementById('Male');
    var female = document.getElementById("Female");
    if (!male.checked && !female.checked) {
        alert('Input can not be left blank');
        return true;
    }
    return false;
}

function validateDate(dateValue)
{
    var selectedDate = dateValue;
    if(selectedDate == '')
        return false;

    var regExp = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dateArray = selectedDate.match(regExp);

    if (dateArray == null){
        return false;
    }

    month = dateArray[1];
    day= dateArray[3];
    year = dateArray[5];        

    if (month < 1 || month > 12){
        return false;
    }else if (day < 1 || day> 31){ 
        return false;
    }else if ((month==4 || month==6 || month==9 || month==11) && day ==31){
        return false;
    }else if (month == 2){
        var isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day> 29 || (day ==29 && !isLeapYear)){
            return false
        }
    }
    return true;
}


var finishedButton = document.getElementById('finished')
var email = document.getElementById("email");
var ZIP_code = document.getElementById("ZIP-code");
var DOB = document.getElementById("DOB");
finishedButton.onclick = function() {
    if (!checkEmpty()) {
        if (!validateDate(DOB.value)) {
            document.getElementById("errorOfDOB").innerHTML = "You have entered a invalid date!"
        } else {
            document.getElementById("errorOfDOB").innerHTML = "";
        }
        validateEmail(email);
        validateZipCode(ZIP_code);
        validateSex();
    }
}

var clearButton = document.getElementById('clear');
clearButton.onclick = function() {
    var allElements = document.getElementsByTagName("*");
    for(var i = 0; i < allElements.length; i++){
        allElements[i].value = "";
    }

    var error = document.getElementsByClassName("error");
    for(var i = 0; i < error.length; i++){
        error[i].innerHTML = "";
    }

    var radio = document.getElementsByClassName("radio");
    for(var i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}