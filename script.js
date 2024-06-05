var random = GetRandomNum(1, 100);

window.onload = SetAnswerLabel;

function GetRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SetAnswerLabel() {
    console.error("123");
    var ansLabel = document.getElementById("answer");
    if (ansLabel)
        ansLabel.textContent = `Ans: ${random}`;
    else
        console.error("未能找到具有 id 'answer' 的元素");
}

function CheckNum() {
    // var input = document.getElementById("inputNum").value;
    // var result = document.getElementById("result");
    // if (random > input)
    //     result.textContent = "太小了";
    // else if (random < input)
    //     result.textContent = "太大了";
    // else
    //     result.textContent = "答對了!!";
}