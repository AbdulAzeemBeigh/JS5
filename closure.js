'use script'
const secureBooking = function (){
   let passengerCount = 0;

   return function(){
    passengerCount ++;
    console.log(`${passengerCount} passengers`);
   };
};
const booker = secureBooking();
booker();
booker();
booker();

function init(){
    var name = "Mozilla";
    function displayName(){
        console.log(name); // closure
    }
    displayName();
};
init();

console.dir(booker);

let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    };
};

const h =function(){
    const b = 786;
    f = function(){
        console.log(b * 2);
    };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);


const numPassengers = function (n,wait){
    const perGroup = n / 3;
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait *1000);
    console.log(`will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
numPassengers(180,3);  