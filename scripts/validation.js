(function (window) {
    'use sytrict';
    let App = window.App || {};
    let Validation = {
        isCompanyEmail: function (email) {
            return /.+@isd535\.org$/.test(email);
        },
        isWeakCoffee: function (string, strength) {
            let weak = string.toUpperCase().includes('DECAF');
            if (!weak && strength > 20) {
                return false;
            } else {
                return true;
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);