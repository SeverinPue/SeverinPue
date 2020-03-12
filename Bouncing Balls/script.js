/* clock.js (26.6.2013, 9.7.2014 F.L. Nicolet) 

<div id="clock" style="height:160px;"></div>
<script>drawClock('clock')</script>
*/

var clock;
var context;
var radius;

function startClock() {
    clock = document.getElementById('clock');
    context = clock.getContext('2d');
    radius = clock.width / 2;
    setInterval(drawClock, 1000);
}

function drawClock() {
    var container = document.getElementById('clock');
    var clockSize = parseInt(container.style.height);

    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    canvas.width = clockSize;
    canvas.height = clockSize;
    canvas.position = 'relative';

    var context = canvas.getContext('2d');
    var radius = clockSize / 2 - 4; /* radius of clockface */

    setInterval(drawClock, 1000);

    function drawClock() {
        context.clearRect(0, 0, clockSize, clockSize);
        drawCircle();
        drawCenter();
        drawNumerals();
        drawHands();
    }

    function drawCircle() {
        context.beginPath();
        context.arc(clockSize / 2, clockSize / 2, radius, 0, Math.PI * 2, true);
        context.stroke();
    }

    function drawCenter() {
        context.beginPath();
        context.arc(clockSize / 2, clockSize / 2, clockSize / 32, 0, Math.PI * 2, true);
        context.fill();
    }

    function drawNumerals() {
        var numeralRadius = 0.8 * radius;
        var fontHeight = radius / 5;
        context.font = fontHeight + 'px Times';
        for (var i = 1; i <= 12; i++) {
            var fontWidth = context.measureText(i).width;
            var angle = (i - 3) * 30;
            angle = angle * Math.PI / 180;
            var x = clockSize / 2 + Math.cos(angle) * numeralRadius - fontWidth / 2;
            var y = clockSize / 2 + Math.sin(angle) * numeralRadius + fontHeight / 3;
            context.fillText(i, x, y);
        }
    }

    function drawHands() {
        var date = new Date;
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours() % 12 * 5 + minutes / 12;
        drawOneHand(hours - 15, 0.6 * radius, 0.15 * clockSize);
        drawOneHand(minutes - 15, 0.75 * radius, 0.09 * clockSize);
        drawOneHand(seconds - 15, 0.75 * radius, 3);
    }

    function drawOneHand(timeUnits, length, width) {
        var x0 = clockSize / 2;
        var y0 = clockSize / 2;
        var x1 = Math.cos(timeUnits * Math.PI / 30) * length;
        var y1 = Math.sin(timeUnits * Math.PI / 30) * length;
        context.lineWidth = Math.ceil(width * radius / 400);
        context.moveTo(x0, y0);
        context.lineTo(x0 + x1, y0 + y1);
        context.stroke();
    }
}