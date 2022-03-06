'use strict';

const salmonSales = document.getElementById('salmonSales');
console.log(salmonSales);

// const listArea = document.getElementById('listArea');
// console.log('listArea');



let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm',];

// let seattleStore = {
//   name: 'seattle',
//   min: 23,
//   max: 65,
//   avgCookieSale: 6.3,
//   dailySale: 0,
//   cookiesSoldPerHour: [],
//   customerCount: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSoldPerCustomerCalc: function () {
//     return Math.round(this.customerCount() * this.avgCookieSale);
//   },
//   cookieSaleAlgorithm: function () {
//     //calc cookies for all 14 hours
//     let i = 0;
//     for (i = 0; i < hour.length; i++) {
//       let customerThisHour = this.cookiesSoldPerCustomerCalc();
//       this.cookiesSoldPerHour.push(customerThisHour);
//       // console.log(customerThisHour);
//       // console.log(this.cookiesSoldPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   },
//   totalCookies: function () {
//     let dailyTotal = Math.round(this.cookiesSoldPerHour.reduce((a, b) => a + b));
//     this.dailySale = dailyTotal;
//     return this.dailySale;
//   },
//   render: function () {
//     this.cookiesSoldPerCustomerCalc();
//     this.cookieSaleAlgorithm();
//     this.totalCookies();
//     let printName = document.createElement('h2');
//     printName.textContent = 'Seattle:';
//     listArea.appendChild(printName);
//     let newUnordered = document.createElement('ul');
//     listArea.appendChild(newUnordered);
//     let j = 0;
//     for (j = 0; j < hour.length; j++) {
//       let clock = document.createElement('li');
//       clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
//       newUnordered.appendChild(clock);
//     }
//     let tot = document.createElement('li');
//     tot.textContent = `Total: ${this.dailySale}`;
//     newUnordered.appendChild(tot);
//   }
// };

// // console.log(seattleStore.customerCount());
// // console.log(seattleStore.cookiesSoldPerCustomerCalc());
// // console.log(seattleStore.cookieSaleAlgorithm());
// // console.log(seattleStore.totalCookies());
// seattleStore.render();

// // const salmonSales = document.getElementById('salmonSales');

// // let hourByHourSales = document.createElement('article');

// // salmonSales.appendChild(hourByHourSales);

// let tokyoStore = {
//   name: 'tokyo',
//   min: 3,
//   max: 24,
//   avgCookieSale: 1.2,
//   dailySale: 0,
//   cookiesSoldPerHour: [],
//   customerCount: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSoldPerCustomerCalc: function () {
//     return Math.round(this.customerCount() * this.avgCookieSale);
//   },
//   cookieSaleAlgorithm: function () {
//     //calc cookies for all 14 hours
//     let i = 0;
//     for (i = 0; i < hour.length; i++) {
//       let customerThisHour = this.cookiesSoldPerCustomerCalc();
//       this.cookiesSoldPerHour.push(customerThisHour);
//       // console.log(customerThisHour);
//       // console.log(this.cookiesSoldPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   },
//   totalCookies: function () {
//     let dailyTotal = Math.round(this.cookiesSoldPerHour.reduce((a, b) => a + b));
//     this.dailySale = dailyTotal;
//     return this.dailySale;
//   },
//   render: function () {
//     this.cookiesSoldPerCustomerCalc();
//     this.cookieSaleAlgorithm();
//     this.totalCookies();
//     let printName = document.createElement('h2');
//     printName.textContent = 'Tokyo:';
//     listArea.appendChild(printName);
//     let newUnordered = document.createElement('ul');
//     listArea.appendChild(newUnordered);
//     let j = 0;
//     for (j = 0; j < hour.length; j++) {
//       let clock = document.createElement('li');
//       clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
//       newUnordered.appendChild(clock);
//     }
//     let tot = document.createElement('li');
//     tot.textContent = `Total: ${this.dailySale}`;
//     newUnordered.appendChild(tot);
//   }
// };

// tokyoStore.render();

// let dubaiStore = {
//   name: 'dubai',
//   min: 11,
//   max: 38,
//   avgCookieSale: 3.7,
//   dailySale: 0,
//   cookiesSoldPerHour: [],
//   customerCount: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSoldPerCustomerCalc: function () {
//     return Math.round(this.customerCount() * this.avgCookieSale);
//   },
//   cookieSaleAlgorithm: function () {
//     //calc cookies for all 14 hours
//     let i = 0;
//     for (i = 0; i < hour.length; i++) {
//       let customerThisHour = this.cookiesSoldPerCustomerCalc();
//       this.cookiesSoldPerHour.push(customerThisHour);
//       // console.log(customerThisHour);
//       // console.log(this.cookiesSoldPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   },
//   totalCookies: function () {
//     let dailyTotal = Math.round(this.cookiesSoldPerHour.reduce((a, b) => a + b));
//     this.dailySale = dailyTotal;
//     return this.dailySale;
//   },
//   render: function () {
//     this.cookiesSoldPerCustomerCalc();
//     this.cookieSaleAlgorithm();
//     this.totalCookies();
//     let printName = document.createElement('h2');
//     printName.textContent = 'Dubai:';
//     listArea.appendChild(printName);
//     let newUnordered = document.createElement('ul');
//     listArea.appendChild(newUnordered);
//     let j = 0;
//     for (j = 0; j < hour.length; j++) {
//       let clock = document.createElement('li');
//       clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
//       newUnordered.appendChild(clock);
//     }
//     let tot = document.createElement('li');
//     tot.textContent = `Total: ${this.dailySale}`;
//     newUnordered.appendChild(tot);
//   }
// };

// dubaiStore.render();

// let parisStore = {
//   name: 'paris',
//   min: 20,
//   max: 38,
//   avgCookieSale: 2.3,
//   dailySale: 0,
//   cookiesSoldPerHour: [],
//   customerCount: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSoldPerCustomerCalc: function () {
//     return Math.round(this.customerCount() * this.avgCookieSale);
//   },
//   cookieSaleAlgorithm: function () {
//     //calc cookies for all 14 hours
//     let i = 0;
//     for (i = 0; i < hour.length; i++) {
//       let customerThisHour = this.cookiesSoldPerCustomerCalc();
//       this.cookiesSoldPerHour.push(customerThisHour);
//       // console.log(customerThisHour);
//       // console.log(this.cookiesSoldPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   },
//   totalCookies: function () {
//     let dailyTotal = Math.round(this.cookiesSoldPerHour.reduce((a, b) => a + b));
//     this.dailySale = dailyTotal;
//     return this.dailySale;
//   },
//   render: function () {
//     this.cookiesSoldPerCustomerCalc();
//     this.cookieSaleAlgorithm();
//     this.totalCookies();
//     let printName = document.createElement('h2');
//     printName.textContent = 'Paris:';
//     listArea.appendChild(printName);
//     let newUnordered = document.createElement('ul');
//     listArea.appendChild(newUnordered);
//     let j = 0;
//     for (j = 0; j < hour.length; j++) {
//       let clock = document.createElement('li');
//       clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
//       newUnordered.appendChild(clock);
//     }
//     let tot = document.createElement('li');
//     tot.textContent = `Total: ${this.dailySale}`;
//     newUnordered.appendChild(tot);
//   }
// };

// parisStore.render();

// let limaStore = {
//   name: 'lima',
//   min: 11,
//   max: 38,
//   avgCookieSale: 3.7,
//   dailySale: 0,
//   cookiesSoldPerHour: [],
//   // customerCount: function() {
//   //   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   // },
//   cookiesSoldPerCustomerCalc: function () {
//     return Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.avgCookieSale);
//   },
//   cookieSaleAlgorithm: function () {
//     //calc cookies for all 14 hours
//     let i = 0;
//     for (i = 0; i < hour.length; i++) {
//       let customerThisHour = this.cookiesSoldPerCustomerCalc();
//       this.cookiesSoldPerHour.push(customerThisHour);
//       // console.log(customerThisHour);
//       // console.log(this.cookiesSoldPerHour);
//     }
//     return this.cookiesSoldPerHour;
//   },
//   totalCookies: function () {
//     let dailyTotal = Math.round(this.cookiesSoldPerHour.reduce((a, b) => a + b));
//     this.dailySale = dailyTotal;
//     return this.dailySale;
//   },
//   render: function () {
//     this.cookiesSoldPerCustomerCalc();
//     this.cookieSaleAlgorithm();
//     this.totalCookies();
//     let printName = document.createElement('h2');
//     printName.textContent = 'Lima:';
//     listArea.appendChild(printName);
//     let newUnordered = document.createElement('ul');
//     listArea.appendChild(newUnordered);
//     let j = 0;
//     for (j = 0; j < hour.length; j++) {
//       let clock = document.createElement('li');
//       clock.textContent = `${hour[j]}: ${this.cookiesSoldPerHour[j]}`;
//       newUnordered.appendChild(clock);
//     }
//     let tot = document.createElement('li');
//     tot.textContent = `Total: ${this.dailySale}`;
//     newUnordered.appendChild(tot);
//   }
// };

// limaStore.render();

let storesTable = document.getElementById('locationSales');

// function Cookies(first_param,second_param,third_param,fourth_param,fifth_param,sixth_param,seventh_param,eighth_param,ninth_param,tenth_param,eleventh_param,twelfth_param,thirteenth_param,fourteenth_param,total_param) {
//   this.first = first_param;
//   this.second = second_param;
//   this.third = third_param;
//   this.fourth = fourth_param;
//   this.fifth = fifth_param;
//   this.sixth = sixth_param;
//   this.seventh = seventh_param;
//   this.eighth = eighth_param;
//   this.ninth = ninth_param;
//   this.tenth = tenth_param;
//   this.eleventh = eleventh_param;
//   this.twelth = twelfth_param;
//   this.thirteenth = thirteenth_param;
//   this.fourteenth = fourteenth_param;
//   this.total = total_param;
// }

function Cookies(name_param, min_param, max_param, avg_param) {
  this.name = name_param;
  this.min = min_param;
  this.max = max_param;
  this.avgCookieSale = avg_param;
  this.hourlyArr = [];
}

let storesArr = [
  new Cookies('Seattle', 23, 65, 6.3),
  new Cookies('Tokyo', 3, 24, 1.2),
  new Cookies('Dubai', 11, 38, 3.7),
  new Cookies('Paris', 20, 38, 2.3),
  new Cookies('Lima', 2, 16, 4.6),
];

console.log(storesArr);
console.log(storesArr[0].hourlyArr);



function tableHeader() {
  let tableHeader = document.createElement('thead');
  storesTable.appendChild(tableHeader);
  let headerRow = document.createElement('tr');
  tableHeader.appendChild(headerRow);
  let blank = document.createElement('th');
  headerRow.appendChild(blank);
  let i;
  for (i = 0; i < hour.length; i++) {
    let headerData = document.createElement('th');
    headerData.textContent = `${hour[i]}`;
    headerRow.appendChild(headerData);
  }
  let total = document.createElement('th');
  total.textContent = 'Daily Location Total:';
  headerRow.appendChild(total);
}

tableHeader();

// Cookies.prototype.cookiesSold = function() {
// };



Cookies.prototype.cookiesPerHour = function () {
  let i = 0;
  for (i = 0; i < hour.length; i++) {
    let cookieSales = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.avgCookieSale);
    this.hourlyArr.push(cookieSales);
    // console.log(customerThisHour);
    // console.log(this.cookiesSoldPerHour);
  }
  // return this.cookiesSoldPerHour;
};

Cookies.prototype.cookieTotal = function () {
  let dailyTotal = Math.round(this.hourlyArr.reduce((a, b) => a + b));
  this.dailySale = dailyTotal;
  return this.dailySale;
};

Cookies.prototype.render = function () {
  let row = document.createElement('tr');
  storesTable.appendChild(row);
  let name = document.createElement('td');
  name.textContent = this.name;
  row.appendChild(name);
  let i;
  for (i = 0; i < hour.length; i++) {
    let data = document.createElement('td');
    data.textContent = `${this.hourlyArr[i]}`;
    row.appendChild(data);
  }
  let total = document.createElement('td');
  total.textContent = `${this.cookieTotal()}`;
  row.appendChild(total);
};

for (let i = 0; i < storesArr.length; i++) {
  storesArr[i].cookiesPerHour();
  storesArr[i].cookieTotal();
  storesArr[i].render();
}

function tableFooter() {
  let tableFooter = document.createElement('thead');
  storesTable.appendChild(tableFooter);
  let footerRow = document.createElement('tr');
  tableFooter.appendChild(footerRow);
  let totals = document.createElement('th');
  totals.textContent = 'Totals';
  footerRow.appendChild(totals);

  let holdArr = [];
  let total = 0;
  for (let i = 0; i < hour.length; i++) {
    total = 0;
    // console.log(storesArr[0].hourlyArr[0]);
    for (let j = 0; j < storesArr.length; j++) {
      total += storesArr[j].hourlyArr[i];
      // console.log(storesArr[j].hourlyArr[i]);
      // console.log(holdArr[i]);
    }
    holdArr.push(total);
    let footerData = document.createElement('th');
    footerData.textContent = `${holdArr[i]}`;
    footerRow.appendChild(footerData);

  }
  let grandTotal = Math.round(holdArr.reduce((a, b) => a + b));
  console.log(grandTotal);
  let footerData = document.createElement('th')
  footerData.textContent = `${grandTotal}`;
  footerRow.appendChild(footerData);
}

tableFooter();
