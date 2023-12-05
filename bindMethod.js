'use strict'
const indigo = {
    airline: 'indigo',
    iataCode: 'IG',
    bookings: [],
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
  indigo.book(239, 'Abdul Azeem');
  indigo.book(635, 'Abdul Azeem Beigh');
  
  const jetAirlines = {
    airline: 'jetAirlines',
    iataCode: 'jA',
    bookings: [],
  };
  indigo.book.call(jetAirlines, 23, 'Abdul ');

  const uae = {
    airline: 'Emirates',
    iataCode: 'Em',
    bookings: [],
  };

const book1 = indigo.book.bind(indigo);
const book2 = indigo.book.bind(jetAirlines);
const book3 = indigo.book.bind(uae);

book1(23, 'Lewis');
book2(22, 'Joans');
book3(20, 'John');


// With Event Listeners
indigo.planes = 300;

indigo.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
indigo.buyPlane();

// document
  document.querySelector('.buy').addEventListener('click', indigo.buyPlane.bind(indigo));

// // Partial application
const TaxCal = (rate, value) => value + value * rate;
console.log(TaxCal(0.1, 200));
const Taxnew = TaxCal.bind(null, 0.23);
console.log(Taxnew(100));
console.log(Taxnew(23));

const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  };
};
const vat = addTaxRate(0.23);
console.log(vat(200));
console.log(vat(300));

