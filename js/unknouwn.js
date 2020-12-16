// NOT FOR NOW


// function setLine(offsetX, offsetY) {
//     if (wordLength) {
//         if (offsetX >= gMeme.lines[gMeme.selectedLineIdx].pos.x / 2 && offsetX <= gCanvas.width - gMeme.lines[gMeme.selectedLineIdx].pos.x / 2 &&
//             offsetY >= gMeme.lines[gMeme.selectedLineIdx].pos.y && offsetY <= gMeme.lines[gMeme.selectedLineIdx].pos.y + gLineWidth) {
//             renderFocus(gMeme.lines[gMeme.selectedLineIdx].pos.x / 4, gMeme.lines[gMeme.selectedLineIdx].pos.y / 2, gCanvas.width - gMeme.lines[gMeme.selectedLineIdx].pos.x / 2, gMeme.lines[gMeme.selectedLineIdx].pos.y / 2)
//             drawPic();
//         }
//     }

// }


// function renderTxt(txt) {
//     console.log(txt.length);
//     var idxLine = gMeme.selectedLineIdx;
//     gMeme.lines[idxLine].txt = txt;
//     if (gMeme.selectedLineIdx === 0) {
//         if (txt.length > 0) gLinesArr.push(txt)
//         console.log(gLinesArr);
//         gFinalArr[idxLine] = gLinesArr[gLinesArr.length - 1];
//         console.log(gFinalArr);
//         // console.log(gFinalArr.gMeme.selectedLineIdx);

//         // drawPic();
//     } else {
//         if (txt.length > 0) gLinesArr.push(txt)
//         console.log(gLinesArr);
//         gFinalArr[idxLine] = gLinesArr[gLinesArr.length - 1]
//         console.log(gFinalArr);
//         // console.log(gFinalArr.gMeme.selectedLineIdx);
//         // drawPic();
//     }
//     drawPic();
// }

// function plus() {
//     gMeme.lines.push({
//         txt: 'fix it',
//         size: 30,
//         color: 'white',
//         border: 'black',
//         align: 'center',
//         font: 'fantasy',
//         pos: { x: 150, y: 200, xEnd: 320, yEnd: 380 }
//     })
//     var idxLine = gMeme.selectedLineIdx;
//     gFinalArr.idxLine = ' ';

//     var posX = gMeme.lines[idxLine].pos.x;
//     var posY = gMeme.lines[idxLine].pos.y;
//     console.log('hi');
//     renderFocus(posX - (wordLength * 13), posY / 2.2, wordLength * gLineSize / 1.8, posY / 1.6);
//     drawPic();
// }

// function drawLine(txt, idxLine, x, y) {
//     gCtx.beginPath();
//     // var elPlaceholder = document.querySelector('input[name="text"]');
//     // gMeme.lines[idxLine].txt = elPlaceholder.value;
//     gMeme.lines[idxLine].txt = txt;
//     wordLength = gMeme.lines[idxLine].txt.length;
//     console.log(wordLength);
//     var text = gMeme.lines[idxLine].txt;
//     gCtx.lineWidth = '2';
//     gCtx.strokeStyle = gMeme.lines[idxLine].border;
//     gCtx.fillStyle = gMeme.lines[idxLine].color;
//     gCtx.font = gMeme.lines[idxLine].size + 'px Impact';
//     gCtx.textAlign = gMeme.lines[idxLine].align;
//     gCtx.fillText(text, x, y);
//     gCtx.strokeText(text, x, y);
//     gCtx.closePath();
// }
// function drawPic() {
//     var img = new Image();
//     img.src = gImgs[gMeme.selectedImgId].url;
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
//         var idxLine = gMeme.selectedLineIdx;
//         var posX = gMeme.lines[idxLine].pos.x;
//         var posY = gMeme.lines[idxLine].pos.y;
//         gLineSize = 50;
//         var txt = gFinalArr[idxLine]
//         gMeme.lines.forEach(line => {
//             drawLine(txt, idxLine, posX, posY);

//             switch (idxLine) {
//                 case 0:
//                     renderFocus(posX - (wordLength * 13), posY / 2.2, wordLength * gLineSize / 1.8, posY / 1.6);
//                     break;
//                 case 1:
//                     drawLine(txt, idxLine, posX, posY);
//                     renderFocus(posX - (wordLength * 13), posY / 1.12, wordLength * gLineSize / 1.8, posY / 7);
//                     break;
//             }
//         })

//     }
// }






// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container');
//     console.log(elContainer.offsetWidth)
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }







// function saveMeme() {
//     var elEditor = document.querySelector('.meme-editor');
//     elEditor.style.display = 'none';
//     var elMemesGallery = document.querySelector('.memes-section');
//     elMemesGallery.style.display = 'grid';
//     gMyPics.push()
//     renderMyPics(gMyPics)
// }



// function deleteFocus(x, y, xEnd, yEnd) {
//     gCtx.beginPath();
//     gCtx.rect(x, y, xEnd, yEnd)
//     gCtx.lineWidth = '2';
//     // gCtx.strokeStyle = 'none';
//     // gCtx.stroke();
// }


// utills ..........................................

// var idxLine = gMeme.selectedLineIdx;
// var posX = gMeme.lines[idxLine].pos.x;
// var posY = gMeme.lines[idxLine].pos.y; //drawing the focus dinnamically with the text
// var lineSize = gMeme.lines[idxLine].size;
// renderFocus(posX - (wordLength * 13), posY / 2.2, wordLength * lineSize / 1.8, posY / 1.6);
// switch (idxLine) {
//     case 0:
//         renderFocus(posX - (wordLength * 13), posY / 2.2, wordLength * lineSize / 1.8, posY / 1.6);
//         break;
//     case 1:
//         renderFocus(posX - (wordLength * 13), posY / 1.12, wordLength * lineSize / 1.5, posY / 7);
//         break;
//     case 2:
//         renderFocus(posX - (wordLength * 10), posY / 1.2, wordLength * lineSize / 1.5, posY / 5);
//         break;
//     case 3:
//         renderFocus(posX - (wordLength * 10), posY / 1.15, wordLength * lineSize / 1.5, posY / 5);
//         break;
//     case 4:
//         renderFocus(posX - (wordLength * 10), posY / 1.16, wordLength * lineSize / 1.5, posY / 6);
//         break;
//     case 5:
//         renderFocus(posX - (wordLength * 10), posY / 1.13, wordLength * lineSize / 1.5, posY / 7);
//         break;
//     case 6:
//         renderFocus(posX - (wordLength * 10), posY / 1.12, wordLength * lineSize / 1.5, posY / 7);
//         break;
//     case 7:
//         renderFocus(posX - (wordLength * 10), posY / 1.1, wordLength * lineSize / 1.5, posY / 7);
//         break;
// 
// var gElLineNo = document.querySelector('.lineNo');


// function renderCanvas() { //this function happens each time the input getting change
//     drawPic() //rendering the pic on the canvas
//     renderLines() //each time render the gMeme.lines[selectedLineIdx].txt. the renderTxt() function just changing this value. 
// }
// var gImos = {
//     idxImo: 7,
//     imojs: [{
//         imo: '😁',

//         pos: {
//             x: getRandomIntInclusive(10, 500),
//             y: getRandomIntInclusive(10, 500)
//         },
//     }]
// };

// gImos.imojs.forEach(imo => {
//     drawImo(imo)
// })



// function drawImo(imoji) {
//     gCtx.fillText(imoji.imo, imoji.pos.x, imoji.pos.y)
// }


// function clickImo(elImo) {
//     console.log(elImo);
//     gImos.imojs.push({
//         pos: {
//             x: getRandomIntInclusive(10, gCanvas.width - 10),
//             y: getRandomIntInclusive(10, gCanvas.height - 10)
//         },
//         imo: elImo,

//     })
//     gImos.idxImo++;
//     console.log(gImos.idxImo);

//     drawPic();
// }


// function canvasClick(ev) {
//     var idx = gMeme.lines.findIndex(line => {
//         console.log('line.pos.y/2-', line.pos.y / 2);
//         console.log('line.pos.y*1.5-', line.pos.y * 1.5);
//         if (ev.offsetY > line.pos.y / 2 && ev.offsetY < line.pos.y * 1.5)
//             gMeme.selectedLineIdx = idx;
//         // console.log(gMeme.selectedLineIdx);
//     })
//     drawPic();
//     // gMeme.lines.forEach(line => {
//     // if(ev.offsetY>line.pos.y+)
//     // console.log('line.pos.yEnd-', line.pos.yEnd);
//     // })
// }

// function renderLines() { //using the lines[selectedLineIdx].txt that got changed in renderTxt().
//     deleteTxt() // delete the previous txt by clearing the canvas and drawing only the pic on it as 'start writing'
//     drawLine(gMeme.lines[gMeme.selectedLineIdx]) //drawing the curr txt on the canvas
// }

// function deleteTxt() {
//     clearCanvas(); //clear the canvas form everything
// }
// function clearCanvas() {
//     gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
// }



//in the mouse events:
// var isClickedImo = false;
// gImos.idxImo = gImos.imojs.findIndex(anImo => {
//     return (ev.offsetY > anImo.pos.y && ev.offsetY < anImo.pos.y * 10 && ev.offsetX > anImo.pos.x && ev.offsetX < anImo.pos.x * 10)
// })
// console.log(gImos);
// var imo = gImos.imojs[gImos.idxImo];
// if (ev.offsetY > imo.pos.y && ev.offsetY < imo.pos.y * 10 && ev.offsetX > imo.pos.x && ev.offsetX < imo.pos.x * 10) {
//     gImos.imojs[gImos.idxImo].pos.x = ev.offsetX;
//     gImos.imojs[gImos.idxImo].pos.y = ev.offsetY;
//     isClickedImo = true;
//     console.log('found an imoji');
//     console.log('imo-', imo);
// }

// console.log(gImos);
// if (isClickedImo) {
//     console.log('gImos.idx-', gImos.idxImo);
//     var imo = gImos.imojs[gImos.idxImo];
//     console.log('imo-', imo);

//     if (ev.offsetY > imo.pos.y && ev.offsetY < imo.pos.y * 10 && ev.offsetX > imo.pos.x && ev.offsetX < imo.pos.x * 10) {
//         gImos.imojs[gImos.idxImo].pos.x = ev.offsetX;
//         gImos.imojs[gImos.idxImo].pos.y = ev.offsetY;
//         console.log('found an imoji');
//         drawPic();
//     }
// }

// if (isClickedImo) {
//     gImos.imojs.forEach((imo, idx) => {
//         if (ev.offsetY > imo.pos.y && ev.offsetY < imo.pos.y * 10 && ev.offsetX > imo.pos.x && ev.offsetX < imo.pos.x * 10) {
//             gImos.idxImo = idx;
//             imo.pos.x = ev.offsetX;
//             imo.pos.y = ev.offsetY;
//         }
//     });
// }
// isClickedImo = false;