'use strict';

const salmonSales = document.getElementById('salmonSales');
console.log(salmonSales);
const staffingNeeds = document.getElementById('staffingNeeds');
console.log(staffingNeeds);
const locationHead = document.getElementById('locationHead');
const locationBody = document.getElementById('locationBody');
const locationFoot = document.getElementById('locationFoot');


// const addButton = document.getElementById('addButton');

let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm',];


function footReset() {
  while (locationFoot.firstChild) {
    locationFoot.removeChild(locationFoot.firstChild);
  }
  tableFooter();
}

const newStore = document.getElementById('addStore');


newStore.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('Submitting', event);

  let form = event.target;
  let name = form.location;
  let min = form.min;
  let max = form.max;
  let avg = form.avg;

  let store = new Cookies(name.value, parseInt(min.value), parseInt(max.value), parseInt(avg.value));

  // for (let i = 0; i < storesArr.length; i++) {
  //   if (name.value === storesArr[i].name) {
  //     console.log(storesArr[i]);
  //     let store = storesArr[i];
  //     store.min = form.min;
  //     store.max = form.max;
  //     store.avgCookieSale = form.avg;
  //     storesArr[i].push(store);
  //     console.log(storesArr[i]);
  //     console.log(storesArr);
  //     storesArr.render();
  //     break;
  //   }
  //   else {
  storesArr.push(store);
  console.log(store);
  store.cookiesPerHour();
  store.cookieTotal();
  store.render();
  footReset();
  // break;
  //   }
  // }

  name.value = '';
  min.value = '';
  max.value = '';
  avg.value = '';

  console.log(storesArr);
});

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

function tableHeader() {
  let headerRow = document.createElement('tr');
  locationHead.appendChild(headerRow);
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

Cookies.prototype.cookiesPerHour = function () {
  let i = 0;
  for (i = 0; i < hour.length; i++) {
    let cookieSales = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.avgCookieSale);
    this.hourlyArr.push(cookieSales);
  }
};

Cookies.prototype.cookieTotal = function () {
  let dailyTotal = Math.round(this.hourlyArr.reduce((a, b) => a + b));
  this.dailySale = dailyTotal;
  return this.dailySale;
};

Cookies.prototype.render = function () {
  let row = document.createElement('tr');
  locationBody.appendChild(row);
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

// Cookies.prototype.fixTotals = function () {
//   this.grandTotal += storeUpdate.cookieTotal();
//   this.footerData += storeUpdate.cookiesPerHour();
// };

// Cookies.prototype.staffingRender = function () {
//   let row = document.createElement('tr');
//   staffingNeeds.appendChild(row);
//   let name = document.createElement('td');
//   name.textContent = this.name;
//   row.appendChild(name);
//   let i;
//   for (i = 0; i < hour.length; i++) {
//     for (let j = 0; j < storesArr.length; j++) {
//       let data = document.createElement('td');
//       data.textContent = `${this.hourlyArr[i] / storesArr[j]}`;
//       console.log(this.hourlyArr[i]);
//       console.log(storesArr[j]);
//       row.appendChild(data);
//     }
//   }
//   let total = document.createElement('td');
//   total.textContent = `${this.cookieTotal()}`;
//   row.appendChild(total);
// };

function tableFooter() {
  // let tableFooter = document.createElement('thead');
  // locationFoot.appendChild(tableFooter);
  let footerRow = document.createElement('tr');
  locationFoot.appendChild(footerRow);
  let totals = document.createElement('th');
  totals.textContent = 'Totals';
  footerRow.appendChild(totals);

  let holdArr = [];
  let total = 0;
  for (let i = 0; i < hour.length; i++) {
    total = 0;
    for (let j = 0; j < storesArr.length; j++) {
      total += storesArr[j].hourlyArr[i];
    }
    holdArr.push(total);
    let footerData = document.createElement('th');
    footerData.textContent = `${holdArr[i]}`;
    footerRow.appendChild(footerData);
  }
  let grandTotal = Math.round(holdArr.reduce((a, b) => a + b));
  console.log(grandTotal);
  let footerData = document.createElement('th');
  footerData.textContent = `${grandTotal}`;
  footerRow.appendChild(footerData);
}

// function staffingHeader() {
//   let tableHeader = document.createElement('thead');
//   staffingNeeds.appendChild(tableHeader);
//   let headerRow = document.createElement('tr');
//   tableHeader.appendChild(headerRow);
//   let blank = document.createElement('th');
//   headerRow.appendChild(blank);
//   let i;
//   for (i = 0; i < hour.length; i++) {
//     let headerData = document.createElement('th');
//     headerData.textContent = `${hour[i]}`;
//     headerRow.appendChild(headerData);
//   }
// let total = document.createElement('th');
// total.textContent = 'Daily Location Total:';
// headerRow.appendChild(total);
// }
// staffingHeader();

function tableCreation() {
  for (let i = 0; i < storesArr.length; i++) {
    storesArr[i].cookiesPerHour();
    storesArr[i].cookieTotal();
    storesArr[i].render();
    // storesArr[i].staffingRender();
  }
  tableHeader();
  tableFooter();
}
tableCreation();
