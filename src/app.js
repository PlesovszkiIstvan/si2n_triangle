/*
* File: app.js
* Author: Plesovszki István
* Copyright: 2023, Plesovszki István
* Group: Szoft I-2-N
* Date: 2023-03-09
* Github: https://github.com/PlesovszkiIstvan/
* Licenc: GNU GPL
*/

var baseInput = document.querySelector('#base');
var heightInput = document.querySelector('#height');
var areaInput = document.querySelector('#area');
var calcButton = document.querySelector('#calcButton');

if (calcButton){
    calcButton.addEventListener('click', () => {
    workInput();
});
}


function workInput() {
    let res = chechInput(baseInput);
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base,height);
    areaInput.value = area;
}

function calcTriangleArea(base, height) {
    return base * height / 2;
}

function chechInput(input){
    let res = input.match(/^[0-9]/);
    console.log(res);
}