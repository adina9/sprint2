'use strict'


function onCanvasMouseDown(ev) {
    gMeme.selectedLineIdx = gMeme.lines.findIndex(aLine => {
        return (ev.offsetY > aLine.pos.y / 2 && ev.offsetY < aLine.pos.y * 1.5)
    })
    var line = gMeme.lines[gMeme.selectedLineIdx]
    if (ev.offsetY > line.pos.y / 2 && ev.offsetY < line.pos.y * 1.5) {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = ev.offsetX;
        gMeme.lines[gMeme.selectedLineIdx].pos.y = ev.offsetY;
        document.querySelector('input[placeholder="Type"]').value = line.txt;
        isClicked = true;
    }
}

function onCanvasMouseMove(ev) {
    if (isClicked === true) {
        var line = gMeme.lines[gMeme.selectedLineIdx]
        if (ev.offsetY > line.pos.y / 2 && ev.offsetY < line.pos.y * 1.5) {
            line.pos.x = ev.offsetX;
            line.pos.y = ev.offsetY;
            drawPic();
        }
    }
}

function onCanvasMouseUp(ev) {
    if (isClicked === true) {
        gMeme.lines.forEach((line, idx) => {
            if (ev.offsetY > line.pos.y / 2 && ev.offsetY < line.pos.y * 1.5) {
                gMeme.selectedLineIdx = idx;
                line.pos.x = ev.offsetX;
                line.pos.y = ev.offsetY;
            }
        });
    }
    isClicked = false;
}

function onTouchMove(ev) {
    ev.preventDefault();
    var rect = ev.target.getBoundingClientRect();
    var x = ev.targetTouches[0].pageX - rect.left;
    var y = ev.targetTouches[0].pageY - rect.top;
    var line = gMeme.lines[gMeme.selectedLineIdx]
    if (y > line.pos.y / 2 && y < line.pos.y * 1.5) {
        var rect = ev.target.getBoundingClientRect();
        line.pos.x = x
        line.pos.y = y
        drawPic();
    }
}

function onTouchEnd(ev) {
    ev.preventDefault();
    if (isTouched === true) {
        gMeme.lines.forEach((line, idx) => {
            if (ev.offsetY > line.pos.y / 2 && ev.offsetY < line.pos.y * 1.5) {
                gMeme.selectedLineIdx = idx;
                line.pos.x = ev.offsetX;
                line.pos.y = ev.offsetY;
                drawPic();
            }
        });
        isTouched = false;
    }
}