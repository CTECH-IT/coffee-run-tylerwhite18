(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided!');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function (func) {
        console.log('Setting the submit handler to the form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();
            let data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            func(data); //pass the  data into the function that was passed into the function

            this.reset();
            this.elements[0].focus();
            document.getElementById('sliderLabel').innerHTML = 30;
            document.querySelector('[id="inspirationalMessage"]').innerHTML = 'You should really change the strength...';
        });
    };

    FormHandler.prototype.addInputHandler = function (func) {
        this.$formElement.on('input', '[name="emailAddress"]', function (event) {
            let emailAddress = event.target.value;
            if (func(emailAddress) == true) {
                event.target.setCustomValidity('');
            } else {
                event.target.setCustomValidity(emailAddress + ' is not an authorized email address!');
            }
        });
    };

    FormHandler.prototype.addYHandler = function (func) {
        let name = "";
        let num = document.getElementById('strengthLevel').value;
        this.$formElement.on('input', '[name="coffee"]', function (event) {
            name = event.target.value;
            if (func(name, num)) {
                event.target.setCustomValidity('A ' + name + ' needs to be weaker.');
            } else {
                event.target.setCustomValidity('');
            }
            document.getElementById('strengthLevel').setCustomValidity('');
        });
        this.$formElement.on('input', '[name="strength"]', function (event) {
            num = event.target.value;
            if (func(name, num)) {
                event.target.setCustomValidity('Decaf cannot be made with strength ' + num);
            } else {
                event.target.setCustomValidity('');
            }
            document.getElementById('coffeeOrder').setCustomValidity('');
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);