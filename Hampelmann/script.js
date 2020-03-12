var rinne = document.getElementById('rinne');
var schnur = document.getElementById('schnur');
var kugel = document.getElementById('kugel');
var armLinks = document.getElementById('armLinks');
var armRechts = document.getElementById('armRechts');
var beinLinks = document.getElementById('beinLinks');
var beinRechts = document.getElementById('beinRechts');
kugel.onmousedown = function(event) {
    event.preventDefault();
    var shiftY = event.clientY;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        var newTop = event.clientY - shiftY;
        if (newTop < 0) { newTop = 0; }
        var bottomEdge = rinne.offsetHeight;
        if (newTop > bottomEdge) { newTop = bottomEdge; }
        kugel.style.marginTop = newTop + 'px';
        schnur.style.height =
            parseInt(rinne.style.top) - parseInt(schnur.style.top) + newTop + 'px';
        armLinks.style.transform = 'rotate(' + lin(-82, 60) + 'deg)';
        armRechts.style.transform = 'rotate(' + lin(82, -60) + 'deg)';
        beinLinks.style.transform = 'rotate(' + lin(2, 58) + 'deg)';
        beinRechts.style.transform = 'rotate(' + lin(-2, -58) + 'deg)';

        function lin(y1, y2) {
            var m = (y2 - y1) / bottomEdge;
            var n = y1;
            return m * newTop + n;
        }
    }

    function onMouseUp(event) {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
}