'use strict'
const runOnce = function(){
    console.log("Run's one time only");
};
runOnce();
(function(){
    console.log("This runs only once");
})();
(()=>console.log("this also runs once"))();
{
    let x = 20;
    const y = 30;
    var z = 50;

}

// console.log(x);
// console.log(y);
console.log(z);