var d1 = new Date(); //"now"
var d2 = new Date("2020/11/20")  // some date
console.log(d1.to, d2)
var diff = Math.abs(d1-d2);  // difference in milliseconds
console.log(new Date(diff))