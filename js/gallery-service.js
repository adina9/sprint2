'use strict';

const KEY = 'memes';
var isTouched = false;
var isClicked = false;

var gLinesIdxArr = [0, 1];
var gFilteredArr = [];
var gCanvas;
var gCtx;
var wordLength;

var gKeywords = { 'happy': 15, 'sarcastic': 20, 'man': 30, 'animal': 15, 'baby': 35, 'sleep': 25, 'serious': 15, 'smile': 18 }

var gImgs = [
    { id: 1, url: './images/meme-imgs (square)/1.jpg', keywords: ['crazy', 'sarcastic', 'man'] },
    { id: 2, url: './images/meme-imgs (square)/2.jpg', keywords: ['animal', 'happy'] },
    { id: 3, url: './images/meme-imgs (square)/3.jpg', keywords: ['baby', 'animal', 'sleep'] },
    { id: 4, url: './images/meme-imgs (square)/4.jpg', keywords: ['animal', 'sleep'] },
    { id: 5, url: './images/meme-imgs (square)/5.jpg', keywords: ['baby', 'sarcastic', 'serious'] },
    { id: 6, url: './images/meme-imgs (square)/6.jpg', keywords: ['man', 'happy', 'smile'] },
    { id: 7, url: './images/meme-imgs (square)/7.jpg', keywords: ['baby', 'smile', 'happy'] },
    { id: 8, url: './images/meme-imgs (square)/8.jpg', keywords: ['crazy', 'smile', 'happy'] },
    { id: 9, url: './images/meme-imgs (square)/9.jpg', keywords: ['baby', 'smile', 'sarcastic', 'happy'] },
    { id: 10, url: './images/meme-imgs (square)/10.jpg', keywords: ['man', 'smile', 'happy'] },
    { id: 11, url: './images/meme-imgs (square)/11.jpg', keywords: ['man', 'serious'] },
    { id: 12, url: './images/meme-imgs (square)/12.jpg', keywords: ['man', 'smile'] },
    { id: 13, url: './images/meme-imgs (square)/13.jpg', keywords: ['sarcastic', 'man', 'happy'] },
    { id: 14, url: './images/meme-imgs (square)/14.jpg', keywords: ['man', 'serious'] },
    { id: 15, url: './images/meme-imgs (square)/15.jpg', keywords: ['man', 'smile', 'happy'] },
    { id: 16, url: './images/meme-imgs (square)/16.jpg', keywords: ['man', 'smile', 'happy'] },
    { id: 17, url: './images/meme-imgs (square)/17.jpg', keywords: ['man', 'serious'] },
    { id: 18, url: './images/meme-imgs (square)/18.jpg', keywords: ['happy', 'smile'] }
];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: '',
            size: 50,
            color: 'white',
            border: 'black',
            align: 'center',
            font: 'impact',
            lineWidth: '3',
            pos: { x: 210, y: 80, xEnd: 320, yEnd: 150 }
        },
        {
            txt: '',
            size: 40,
            color: 'red',
            border: 'black',
            font: 'impact',
            align: 'cneter',
            lineWidth: '2',
            pos: { x: 210, y: 400, xEnd: 320, yEnd: 500 }
        }
    ]
}

function drawLine(currLine) {
    gCtx.lineWidth = currLine.lineWidth;
    gCtx.strokeStyle = currLine.border;
    gCtx.fillStyle = currLine.color;
    gCtx.font = `${currLine.size}px ${currLine.font}`;
    gCtx.textAlign = currLine.align;
    gCtx.fillText(currLine.txt, currLine.pos.x, currLine.pos.y);
    gCtx.strokeText(currLine.txt, currLine.pos.x, currLine.pos.y);
}


function renderFocus(x, y, xEnd, yEnd) {
    gCtx.beginPath();
    gCtx.rect(x, y, xEnd, yEnd)
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL('image/jpeg');
    console.log(data)
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}

function openAboutModal() {
    document.querySelector('.about').style.display = 'block';
    document.querySelector('.meme-editor').style.display = 'none';
    document.querySelector('.memes-section').style.display = 'none';;
    document.querySelector('.main-gallery').style.display = 'none';;
}

function loadImageFromInput(ev, onImageReady) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
        gImgs.push(img)
            // renderPics(gImgs)
        drawPic();
    }
    reader.readAsDataURL(ev.target.files[0]);
}