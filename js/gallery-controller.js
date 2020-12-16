'use strict'

function onInit() {
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.meme-editor').style.display = 'none';
    document.querySelector('.memes-section').style.display = 'none';
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    document.querySelector('.main-gallery').style.display = 'block';
    renderPics(gImgs);
    renderSearchWords(gKeywords);
}

function goToCanvas(elImgId) { //getting into the editor area and presenting the selected pic on it
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.main-gallery').style.display = 'none';
    document.querySelector('.meme-editor').style.display = 'grid';
    document.querySelector('.modalColor').style.display = 'none';
    document.querySelector('.modalColorStroke').style.display = 'none';
    var elMainArea = document.querySelector('.main-area');
    elMainArea.style.height = 0;
    gMeme.selectedImgId = elImgId - 1;
    drawPic(); //drawing the selected pic from the gallery on the canvas 
}

function goToGallery() { //getting to the gallery area
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.main-gallery').style.display = 'block';
    document.querySelector('.meme-editor').style.display = 'none';
}

function renderPics(pics) { //rendering all the pics to the gallery
    var strHtml = pics.map(pic => {
        return `
    <img src="${pic.url}" alt="" class="img" onclick="goToCanvas('${pic.id}')">`
    })
    document.querySelector('.images').innerHTML = strHtml.join(' ');
}

function drawPic() { //drawing the selected pic from the gallery on the canvas
    var img = new Image();
    img.src = gImgs[gMeme.selectedImgId].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.forEach(line => {
            drawLine(line)
        })
    }
}

function renderTxt(txt) { //each time the value input changes, gMeme.lines[selectedLineIdx].txt also changes
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    wordLength = gMeme.lines[gMeme.selectedLineIdx].txt.length;
    drawPic();
}

function switchLine() {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1;
    } else {
        gMeme.selectedLineIdx = 0;
    }
    document.querySelector('input[placeholder="Type"]').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function up() {
    gMeme.selectedLineIdx--;
    console.log(gLinesIdxArr[gMeme.selectedLineIdx]);
    gElLineNo.innerText = gMeme.selectedLineIdx
    document.querySelector('input[placeholder="Type"]').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function down() {
    gMeme.selectedLineIdx++;
    gElLineNo.innerText = gMeme.selectedLineIdx;
    document.querySelector('input[placeholder="Type"]').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function plus() {
    gMeme.selectedLineIdx++;

    gMeme.lines.push({
        txt: ' ',
        size: 30,
        color: 'white',
        border: 'black',
        align: 'center',
        font: 'fantasy',
        pos: { x: gMeme.lines[0].pos.x, y: gMeme.lines[0].pos.x + gMeme.selectedLineIdx * 30, xEnd: gMeme.lines[0].pos.xEnd, yEnd: gMeme.lines[0].pos.yEnd + gMeme.selectedLineIdx * 50 }
    })
    gLinesIdxArr.push(gMeme.selectedLineIdx);
    document.querySelector('input[placeholder="Type"]').value = '';
}

function increase() {
    gMeme.lines[gMeme.selectedLineIdx].size += 5;
    drawPic();
}

function decrease() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 5;
    drawPic();
}

function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x -= 15;
    drawPic();
}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = 210;
    drawPic();
}

function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += 15;
    drawPic();
}

function brush() {
    document.querySelector('.modalColor').style.display = 'flex';
}

function brushStroke() {
    document.querySelector('.modalColorStroke').style.display = 'flex';
}


function submitColorStroke() {
    document.querySelector('.modalColorStroke').style.display = 'none';
    var elColor = document.querySelector('input[name="colorStroke"]').value;
    gMeme.lines[gMeme.selectedLineIdx].border = elColor;
    drawPic();
}

function submitColor() {
    document.querySelector('.modalColor').style.display = 'none';
    var elColor = document.querySelector('input[name="colorFill"]').value;
    gMeme.lines[gMeme.selectedLineIdx].color = elColor;
    drawPic();
}

function deleteText() {
    document.querySelector('input[placeholder="Type"]').value = ' ';
    deleteAllTxts();
}

function deleteAllTxts() {
    gMeme.lines.forEach(line => {
        line.txt = ' '
    })
    drawPic();
}

function selectFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
    console.log('font-', gMeme.lines[gMeme.selectedLineIdx].font);
    drawPic();
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    doTrans();
    drawPic();
}

function renderSearchWords(gKeywords) {
    var strHtml = '';
    var i = 0
    for (var key in gKeywords) {
        strHtml += `<p onclick="wordClicked('${key}')" class="key-${i}" style="font-size:calc(1rem + ${gKeywords[key]}px)">${key}&nbsp;</p>`
    }
    document.querySelector('.search-words span').innerHTML = strHtml;
}

function onSearchImgs() {
    gFilteredArr = [];
    var elSearch = document.querySelector('input[placeholder="search"]').value;
    gImgs.forEach(img => {
        var foundWord = img.keywords.find(word => {
            return word === elSearch
        })
        if (foundWord)
            gFilteredArr.push(img)
        else {
            renderPics(gImgs)
            addWord(elSearch)
        }
    })
    renderPics(gFilteredArr)
}

function wordClicked(currWord) {
    renderFontWord(currWord);
    var elSearch = document.querySelector('input[placeholder="search"]').value;
    elSearch = currWord;
    gFilteredArr = [];
    gImgs.forEach(img => {
        var isFound = img.keywords.find(word => {
            return word === currWord
        })
        if (isFound) {
            gFilteredArr.push(img)
        }
    })
    updateSearchWord(elSearch);
    renderPics(gFilteredArr)
}

function updateSearchWord(word) {
    document.querySelector('input[placeholder="search"]').value = word
}

function renderFontWord(word) {
    gKeywords[word] += 3;
    renderSearchWords(gKeywords)
}

function addWord(word) {
    gKeywords[word] = 15
    for (var i = 0; i < gKeywords.length; i++) {
        if (gKeywords[i] === gKeywords[i + 1]) gKeywords.splice(i, 1)
    }
    renderSearchWords(gKeywords)
}

function onImgInput(ev) {
    loadImageFromInput(ev, drawPic)
}


function save() {
    var canvas = document.querySelector('#my-canvas');
    var imgContent = canvas.toDataURL("image/jpg", 1.0)
    saveMemes(imgContent)
}

function saveMemes(imgData) {
    gMeme.urlData = imgData
    var memes = loadFromStorage(KEY)
    if (!memes || memes.length === 0) memes = [gMeme]
    memes.push(gMeme)
    saveToStorage(KEY, memes)
}

function clickImo(elImo) {
    console.log(elImo);
    document.querySelector('input[placeholder="Type"]').value += elImo;
    drawPic();
}

function shareOn(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function(err) {
            console.error(err)
        })
}