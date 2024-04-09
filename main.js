total_Number = "0";
final_Number = "";
answer_Number = "";
operation = "";
point = "";
recent = "";
zero = "yay";
equals = "";
fontSise = 90;

console.log(total_Number);
console.log(final_Number);

function addNumber0() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "0";
            console.log(total_Number);
            font();
        }
    }
}

function addNumber1() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "1";
            console.log(total_Number);
        } else {
            total_Number = "1";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber2() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "2";
            console.log(total_Number);
        } else {
            total_Number = "2";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber3() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "3";
            console.log(total_Number);
        } else {
            total_Number = "3";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber4() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "4";
            console.log(total_Number);
        } else {
            total_Number = "4";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber5() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "5";
            console.log(total_Number);
        } else {
            total_Number = "5";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber6() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "6";
            console.log(total_Number);
        } else {
            total_Number = "6";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber7() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "7";
            console.log(total_Number);
        } else {
            total_Number = "7";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber8() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "8";
            console.log(total_Number);
        } else {
            total_Number = "8";
            console.log(total_Number);
        }
        font();
    }
}

function addNumber9() {
    if (equals == "") {
        if (total_Number != "0") {
            total_Number = total_Number + "9";
            console.log(total_Number);
        } else {
            total_Number = "9";
            console.log(total_Number);
        }
        font();
    }   
}

function addPoint() { 
    if (equals == "") {
        if ((point != "yay") && (total_Number <= 999999999999999)) {
            total_Number = total_Number + ".";
            console.log(total_Number);
            document.getElementById("current").innerHTML = total_Number;
            point = "yay";
            font();
        }
        console.log(point);
    }
}

function font() {
    tableWidth = document.getElementById("q").offsetWidth;
    console.log(fontSise);
    console.log(tableWidth);
    if (document.getElementById("current").innerHTML.length < 15){
        if (fontSise >= 55) {  
            if (tableWidth <= "500") {
                document.getElementById("current").innerHTML = total_Number;
                console.log("Mission Successful");
            } else {
                fontSise = fontSise - 7; 
                displaySize = fontSise + "px";
                console.log(displaySize);
                document.getElementById("current").style.fontSize = displaySize;
                document.getElementById("q").offsetWidth = "500";
                document.getElementById("current").innerHTML = total_Number;
            }
        }
    } else {
        warning = "You can't type a number with more than 15 digits <br> Click on any operation button";
        document.getElementById("warning").innerHTML = warning;
        console.log("Mission failed (more than 15 digits)");
        console.log("We will get them next time");
    }
    recent = "yay";
    zero = "bruh";
}

function addSign1() {
    if (current != "yay") {
        if (zero == "bruh") {
            if (recent == "yay") {
                console.log(recent);
                total_Number = parseInt(document.getElementById("current").textContent);
                console.log(total_Number);
                document.getElementById("store").innerHTML = total_Number + " + ";
                operation = "+";
                console.log(operation);
                final_Number = total_Number;
            } else {
                document.getElementById("store").innerHTML = total_Number + " + ";
            }
            document.getElementById("current").innerHTML = "0";
            document.getElementById("warning").innerHTML = "";
            current = "yay";
            total_Number = "";
            recent = "bruh";
        }
    } else {
        document.getElementById("warning").innerHTML = "You can't give more than two numbers. Click on '=' button";
        equals == "yay";
        console.log(equals);
    }
}

function addSign2() {
    if (current != "yay") {
        if (zero == "bruh") {
            if (recent == "yay") {
                console.log(recent);
                total_Number = parseInt(document.getElementById("current").textContent);
                console.log(total_Number);
                document.getElementById("store").innerHTML = total_Number + " - ";
                operation = "-";
                console.log(operation);
                final_Number = total_Number;
            } else {
                document.getElementById("store").innerHTML = total_Number + " - ";
            }
            document.getElementById("current").innerHTML = "0";
            document.getElementById("warning").innerHTML = "";
            current = "yay";
            total_Number = "";
            recent = "bruh";
        }
    } else {
        document.getElementById("warning").innerHTML = "You can't give more than two numbers. Click on '=' button";
        equals == "yay";
        console.log(equals);
    }
}

function addSign3() {
    if (current != "yay") {
        if (zero == "bruh") {
            if (recent == "yay") {
                console.log(recent);
                total_Number = parseInt(document.getElementById("current").textContent);
                console.log(total_Number);
                document.getElementById("store").innerHTML = total_Number + " X ";
                operation = "*";
                console.log(operation);
                final_Number = total_Number;
            } else {
                document.getElementById("store").innerHTML = total_Number + " X ";
            }
            document.getElementById("current").innerHTML = "0";
            document.getElementById("warning").innerHTML = "";
            current = "yay";
            total_Number = "";
            recent = "bruh";
        }
    } else {
        document.getElementById("warning").innerHTML = "You can't give more than two numbers. Click on '=' button";
        equals == "yay";
        console.log(equals);
    }
}

function addSign4() {
    if (current != "yay") {
        if (zero == "bruh") {
            if (recent == "yay") {
                console.log(recent);
                total_Number = parseInt(document.getElementById("current").textContent);
                console.log(total_Number);
                document.getElementById("store").innerHTML = total_Number + " / ";
                operation = "/";
                console.log(operation);
                final_Number = total_Number;
            } else {
                document.getElementById("current").innerHTML = "0";
                document.getElementById("warning").innerHTML = "";
                document.getElementById("store").innerHTML = total_Number + " / ";
            }
            document.getElementById("current").innerHTML = "0";
            document.getElementById("warning").innerHTML = "";
            current = "yay";
            total_Number = "";
            recent = "bruh";
        }
    } else {
        document.getElementById("warning").innerHTML = "You can't give more than two numbers. Click on '=' button";
        equals == "yay";
        console.log(equals);
    }
}

function addSign5() {
    if (operation == "") {
        document.getElementById("store").innerHTML = document.getElementById("store").textContent + " = ";
        document.getElementById("current").innerHTML = total_Number;
    } else {
        document.getElementById("store").innerHTML = document.getElementById("store").textContent + total_Number + " = ";
        if (operation == "+") {
            answer_Number = parseFloat(final_Number) + parseFloat(total_Number);
            document.getElementById("current").innerHTML = answer_Number;
            console.log(operation);
            console.log(answer_Number);
        } else if (operation == "-") {
            answer_Number = parseFloat(final_Number) - parseFloat(total_Number);
            document.getElementById("current").innerHTML = answer_Number;
            console.log(operation);
            console.log(answer_Number);
        } else if (operation == "*") {
            answer_Number = parseFloat(final_Number) * parseFloat(total_Number);
            document.getElementById("current").innerHTML = answer_Number;
            console.log(operation);
            console.log(answer_Number);
        } else if (operation == "/") {
            answer_Number = parseFloat(final_Number) / parseFloat(total_Number);
            document.getElementById("current").innerHTML = answer_Number;
            console.log(operation);
            console.log(answer_Number);
        }
    }
    if (fontSise >= 55) {  
        if (tableWidth <= "500") {
            document.getElementById("current").innerHTML = total_Number;
            console.log("Mission Successful");
        } else {
            fontSise = fontSise - 7; 
            displaySize = fontSise + "px";
            console.log(displaySize);
            document.getElementById("current").style.fontSize = displaySize;
            document.getElementById("q").offsetWidth = "500";
            document.getElementById("current").innerHTML = total_Number;
        }
    }
    equals = "yay";
    console.log(equals);
}