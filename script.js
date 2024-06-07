var random = GetRandomNum(1, 100);

window.onload = function () {
    SetAnswerLabel();
    InputEvent();
}

function GetRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SetAnswerLabel() {
    var ansLabel = document.getElementById("answer");
    if (ansLabel)
        ansLabel.textContent = `Ans: ${random}`;
    else
        console.error("未能找到具有 id 'answer' 的元素");
}

function CheckNum() {
    var result = document.getElementById("result");
    var btnOK = document.getElementById("ok");
    var inputNum = document.getElementById("inputNum");
    var input = inputNum.value;
    input = parseInt(input);
    inputNum.value = '';

    if (btnOK.textContent == "再來一局") {
        btnOK.textContent = "送出";
        result.textContent = "";
        random = GetRandomNum(1, 100);
        SetAnswerLabel();
        ClearHistory();
    }
    else {
        if (isNaN(input) || input < 1 || input > 100) {
            result.textContent = "請輸入1~100之間的整數";
            return;
        }
        else if (random > input)
            result.textContent = "太小了";
        else if (random < input)
            result.textContent = "太大了";
        else {
            result.textContent = "答對了!!";
            btnOK.textContent = "再來一局"
        }
        var message = `${input}: ${result.textContent}`;
        AddHistory(message);
    }
}

function InputEvent() {
    document.getElementById("inputNum").addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            document.getElementById("ok").click();
        }
    });
}

function AddHistory(message) {
    var historyContainer = document.getElementById("historyContainer");
    var newHistory = document.createElement('p');
    newHistory.textContent = message;
    historyContainer.appendChild(newHistory);
}

function ClearHistory() {
    var historyContainer = document.getElementById("historyContainer");
    historyContainer.textContent = '';
}