// ==UserScript==
// @name PasseiDiretoBlur
// @namespace https://github.com/nerddy22
// @version 1.0.0
// @description Remove the limitation of viewing answers in Passei Direto
// @description:pt-BR Remove a limitação de ver respostas no Passei Direto
// @author Nerddy22
// @icon https://i.imgur.com/ckapbFv.png
// @match *://*passeidireto.com/*
// @match *://*www.passeidireto.com/*
// @grant GM.addStyle
// ==/UserScript==
GM.addStyle(`
.file-text-preview.hidden-content:after {
    backdrop-filter: none;
    webkit-backdrop-filter: none;}

.register-banner.sticky-banner{
    position: static;
    bottom: 0px;
    animation-name: none;
    animation-duration: initial;}
`);

localStorage.setItem("file-text-preview.hidden-content", 0);
localStorage.setItem("file-text-preview.hidden-content:after", 0);


(function() {
    'use strict';
    localStorage.clear()
    window.onload = function () {
    	document.getElementsByClassName("register-banner sticky-banner")[0].remove();
        document.getElementsByClassName("bubble-container")[0].remove();
    }
})();
