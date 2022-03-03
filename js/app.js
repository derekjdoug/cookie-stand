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
    return Math.round(this.customerCount() * this.avgCookieSale);
  },
  cookieSaleAlgorithm: function () {
    //calc cookies for all 14 hours
    let i = 0;
    for (i = 0; i < hour.length; i++) {
      let customerThisHour = this.cookiesSoldPerCustomerCalc();
      this.cookiesSoldPerHour.push(customerThisHour);
      // console.log(customerThisHour);
      // console.log(this.cookiesSoldPerHour);
    }
    return this.cookiesSoldPerHour;
  },
  totalCookies: function () {
    let dailyTotal = Math.round(this.cookiesSoldPerHour.reduce((a, b) => a + b));
    this.dailySale = dailyTotal;
    return this.dailySale;
  }
};

console.log(seattleStore.customerCount());
console.log(seattleStore.cookiesSoldPerCustomerCalc());
console.log(seattleStore.cookieSaleAlgorithm());
console.log(seattleStore.totalCookies());
