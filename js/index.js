const circleEl = document.getElementById("circle")
const upBtnEl = document.getElementById("upBtn")
const downBtnEl = document.getElementById("downBtn")

var rotateValue = circleEl.style.transform;
var rotateSum;

upBtnEl.onclick= function () {
    rotateSum = rotateValue + "rotate(-90deg)"
    circleEl.style.transform = rotateSum;
    rotateValue = rotateSum;


};

downBtnEl.onclick= function () {
    rotateSum = rotateValue + "rotate(90deg)"
    circleEl.style.transform = rotateSum;
    rotateValue = rotateSum;


};