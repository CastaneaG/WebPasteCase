// ==UserScript==
// @name         NewPasteCase
// @namespace    http://wakli.com/
// @version      0.1
// @description  New Paste Case !
// @author       Kangli Wang
// @match        https://github.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==
// 外面括号为匿名函数空间，后面的括号意味着调用这个函数，这种方式使得函数对外不可知。
(function(){
    'use strict';
    console.log('NewPasteCase');
    var button = document.createElement("Button");
    button.innerHTML = "Copy";
    button.style = "top:0;right:0;position:absolute;z-index: 9999";
    document.body.appendChild(button);
    button.addEventListener("click", () =>{
        var web_url = document.URL;
        var web_title = document.title;
        console.log(web_url,web_title);
        const re = '(?<=github.com/[A-Za-z0-9]*/)[A-Za-z0-9]*';
        var target = web_url.match(re)[0];
        const el = document.createElement('a');
        el.innerText = target;
        el.setAttribute("href", web_url);
        document.body.appendChild(el);
        const range = document.createRange();
        range.selectNodeContents(el);
        document.getSelection().addRange(range);
        document.execCommand('copy');
        document.body.removeChild(el);
        document.getSelection().removeAllRanges();

    })
})();