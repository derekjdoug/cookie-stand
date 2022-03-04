'use strict';

const salmonSales = document.getElementById('salmonSales');
console.log(salmonSales);

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
  },
  render: function () {
    this.cookiesSoldPerCustomerCalc();
    this.cookieSaleAlgorithm();
    this.totalCookies();
    let printName = document.createElement('h2');
    printName.textContent = 'Seattle:';
    salmonSales.appendChild(printName);
    let j = 0;
    for (j = 0; j < hour.length; j++) {
      let clock = document.createElement('li');
      clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
      salmonSales.appendChild(clock);
    }
    let tot = document.createElement('li');
    tot.textContent = `Total: ${this.dailySale}`;
    salmonSales.appendChild(tot);
  }
};

// console.log(seattleStore.customerCount());
// console.log(seattleStore.cookiesSoldPerCustomerCalc());
// console.log(seattleStore.cookieSaleAlgorithm());
// console.log(seattleStore.totalCookies());
seattleStore.render();

// const salmonSales = document.getElementById('salmonSales');

// let hourByHourSales = document.createElement('article');

// salmonSales.appendChild(hourByHourSales);

let tokyoStore = {
  name: 'tokyo',
  min: 3,
  max: 24,
  avgCookieSale: 1.2,
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
  },
  render: function () {
    this.cookiesSoldPerCustomerCalc();
    this.cookieSaleAlgorithm();
    this.totalCookies();
    let printName = document.createElement('h2');
    printName.textContent = 'Tokyo:';
    salmonSales.appendChild(printName);
    let j = 0;
    for (j = 0; j < hour.length; j++) {
      let clock = document.createElement('li');
      clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
      salmonSales.appendChild(clock);
    }
    let tot = document.createElement('li');
    tot.textContent = `Total: ${this.dailySale}`;
    salmonSales.appendChild(tot);
  }
};

tokyoStore.render();

let dubaiStore = {
  name: 'dubai',
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
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
  },
  render: function () {
    this.cookiesSoldPerCustomerCalc();
    this.cookieSaleAlgorithm();
    this.totalCookies();
    let printName = document.createElement('h2');
    printName.textContent = 'Dubai:';
    salmonSales.appendChild(printName);
    let j = 0;
    for (j = 0; j < hour.length; j++) {
      let clock = document.createElement('li');
      clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
      salmonSales.appendChild(clock);
    }
    let tot = document.createElement('li');
    tot.textContent = `Total: ${this.dailySale}`;
    salmonSales.appendChild(tot);
  }
};

dubaiStore.render();

let parisStore = {
  name: 'paris',
  min: 20,
  max: 38,
  avgCookieSale: 2.3,
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
  },
  render: function () {
    this.cookiesSoldPerCustomerCalc();
    this.cookieSaleAlgorithm();
    this.totalCookies();
    let printName = document.createElement('h2');
    printName.textContent = 'Paris:';
    salmonSales.appendChild(printName);
    let j = 0;
    for (j = 0; j < hour.length; j++) {
      let clock = document.createElement('li');
      clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
      salmonSales.appendChild(clock);
    }
    let tot = document.createElement('li');
    tot.textContent = `Total: ${this.dailySale}`;
    salmonSales.appendChild(tot);
  }
};

parisStore.render();

let limaStore = {
  name: 'lima',
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
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
  },
  render: function () {
    this.cookiesSoldPerCustomerCalc();
    this.cookieSaleAlgorithm();
    this.totalCookies();
    let printName = document.createElement('h2');
    printName.textContent = 'Lima:';
    salmonSales.appendChild(printName);
    let j = 0;
    for (j = 0; j < hour.length; j++) {
      let clock = document.createElement('li');
      clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
      salmonSales.appendChild(clock);
    }
    let tot = document.createElement('li');
    tot.textContent = `Total: ${this.dailySale}`;
    salmonSales.appendChild(tot);
  }
};

limaStore.render();
