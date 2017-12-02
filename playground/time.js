//0 timestamp in Node refers to Unix APIC:
//Jan 1st 1970 00:00:00 am UTC
//
//
//
// var date = new Date();
//
//
// console.log(date.getMonth());

//new Date().getTime();
// var moment = require('moment');
//
// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY '));

var moment = require('moment');

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
