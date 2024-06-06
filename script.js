var random = GetRandomNum(1, 100);

window.onload = function () {
    SetAnswerLabel();
    inputEvent();
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
    var input = document.getElementById("inputNum").value;
    if (btnOK.textContent == "再來一局") {
        result.textContent = "";
        btnOK.textContent = "送出";
        random = GetRandomNum(1, 100);
        SetAnswerLabel();
    }
    else {
        if (random > input)
            result.textContent = "太小了";
        else if (random < input)
            result.textContent = "太大了";
        else if (random == input) {
            result.textContent = "答對了!!";
            btnOK.textContent = "再來一局"
        }
        else
            result.textContent = "請輸入1~100之間的整數";
    }
}

function inputEvent() {
    document.getElementById("inputNum").addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            document.getElementById("ok").click();
        }
    });
}