function reverseStr() {
    var str = document.getElementById('strtxt').value;
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    document.getElementById('result').value = newString;
}

function length() {
    let str = document.getElementById("strtxt").value;
    output.innerHTML = str.length;
}