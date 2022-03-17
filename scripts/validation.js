(function (window) {
    'use sytrict';
    let App = window.App || {};
    let Validation = {
        isCompanyEmail: function (email) {
            return /.+@isd535\.org$/.test(email);
        },
        isWeakCoffee: function (string, strength) { //title misleading, actually checks if it can be made or not
            let weak = string.toUpperCase().includes('DECAF');
            if (weak && strength > 20) {
                return true;
            } else {
                return false;
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);