function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function backspaceValue() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == "13") {
        var result = document.getElementById("result");
        result.value = eval(result.value);
    }
}