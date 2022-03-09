(function (window) {
    'use strict';
    let App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function (customerId) {
        this.db.remove(customerId);
    };

    App.Truck = Truck;
    window.App = App;
})(window);