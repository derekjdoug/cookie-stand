'use strict';

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattleStore = {
  name: 'seattle',
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  dailySale: 0,
  cookiesSoldPerHour: [],
  customerCount: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesSoldPerCustomerCalc: function () {
    return this.customerCount() * this.avgCookieSale;
  },
  cookieSaleAlgorithm: function () {

  }
};

console.log(seattleStore.customerCount());
console.log(seattleStore.cookiesSoldPerCustomerCalc());
