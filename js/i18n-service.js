'use strict'
var gTrans = {
    gallery: {
        en: 'Gallery',
        he: 'גלריה'
    },
    about: {
        en: 'About',
        he: 'עלינו',
    },
    editor: {
        en: 'Editor',
        he: 'עריכה'
    },
    'my-memes': {
        en: 'My-Memes',
        he: 'הממים שלי'
    },
    search: {
        en: 'search',
        he: 'חפש/י'
    },
    text: {
        en: 'Type',
        he: 'הקלד/י'
    },
    share: {
        en: 'Share',
        he: 'שתפ/י'
    },
    download: {
        en: 'Download',
        he: 'הורד/י'
    },
    save: {
        en: 'Save',
        he: 'שמור/י'
    },
    'about-us': {
        en: 'hello! nice to know you like this app Enjoy!',
        he: 'שלום, כיף לדעת שאת/ה אוהב/ת את האפליקציה'

    }
}


var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'
    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(function(el) {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            el.placeholder = txt
        } else {
            el.innerText = txt
        }
    })
}

function setLang(lang) {
    gCurrLang = lang
}