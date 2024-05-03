var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// 폰트 속성 설정
ctx.font = "30px Arial";
ctx.fillStyle = "black"; // 텍스트 색상


var text = "Game";
var textWidth = ctx.measureText(text).width;
var x = (canvas.width - textWidth) / 2;
var y = canvas.height / 2;

// 캔버스에 텍스트 그리기
ctx.fillText(text, x, y);

// 시작 버튼 요소 가져오기
var startButton = document.getElementById("startButton");

// 마우스를 올렸을 때 색상 변경
startButton.addEventListener("mouseover", function() {
    startButton.style.backgroundColor = "red";
});

// 마우스를 벗어났을 때 색상 변경
startButton.addEventListener("mouseout", function() {
    startButton.style.backgroundColor = "yellow";
});

// 시작 버튼 클릭 시 새로운 페이지로 이동
startButton.addEventListener("click", function() {
    // 새로운 페이지의 URL
    var newPageURL = "file:///C:/HW/Midterm/Q5/main.html"; // 새로운페이지.html에 실제 파일명을 넣어야 합니다.

    // 현재 창에서 새로운 페이지로 이동
    window.location.href = newPageURL;
});