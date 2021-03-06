(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let Validation = App.Validation;



    let myTruck = new Truck('1', new DataStore());
    //let myTruck = new Truck('1', RemoteDataStore(SERVER_URL));
    let checkList = new CheckList(CHECKLIST_SELECTOR);
    window.myTruck = myTruck;

    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
    
    formHandler.addInputHandler(Validation.isCompanyEmail);
    formHandler.addYHandler(Validation.isWeakCoffee);
})(window);
const SLIDER_LOC = 'strengthLevel';
const SLIDE_OUT = 'sliderLabel';
const MESSAGE = '[id="inspirationalMessage"]';

let slider = document.getElementById(SLIDER_LOC);
let outBox = document.getElementById(SLIDE_OUT);
let quoteBox = document.querySelector(MESSAGE);
slider.addEventListener("input", function () {
    let val = slider.value
    outBox.innerHTML = val;
    if (val == 100) {
        quoteBox.innerHTML = 'That should do it.';
    }
    else if (val >= 80) {
        quoteBox.innerHTML = 'You might almost be woken up.';
    }
    else if (val >= 55) {
        quoteBox.innerHTML = 'Keep going. We dont take weak coffee orders.';
    }
    else if (val >= 30) {
        quoteBox.innerHTML = 'Your coffee is going to need to hit the gym at this rate.';
    }
    else if (val >= 20) {
        quoteBox.innerHTML = 'You moved the slider the wrong direction.';
    }
    else {
        quoteBox.innerHTML = 'Enjoy your coffee-flavored water.';
    }
});
