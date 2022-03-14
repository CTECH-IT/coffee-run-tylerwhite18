(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;

    let myTruck = new Truck('1', new DataStore());
    window.myTruck = myTruck;

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
})(window);
const SLIDER_LOC = 'strengthLevel';
const SLIDE_OUT = 'sliderLabel';
const MESSAGE = '[id="inspirationalMessage"]';

let slider = document.getElementById(SLIDER_LOC);
let outBox = document.getElementById(SLIDE_OUT);
let quoteBox = document.querySelector(MESSAGE);
slider.addEventListener("input", function () {
    let val = slider.value
    outBox.innerText = val;
    if (val == 100) {
        quoteBox.innerText = 'That should do it.';
    }
    else if (val >= 80) {
        quoteBox.innerText = 'You might almost be woken up.';
    }
    else if (val >= 55) {
        quoteBox.innerText = 'Keep going. We dont take weak coffee orders.';
    }
    else if (val >= 30) {
        quoteBox.innerText = 'Your coffee is going to need to hit the gym at this rate.';
    }
    else if (val >= 20) {
        quoteBox.innerText = 'You moved the slider the wrong direction.';
    }
    else {
        quoteBox.innerText = 'Enjoy your coffee-flavored water.';
    }
});
