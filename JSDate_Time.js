/*A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. */
var d= new Date();
var fullYear = d.getFullYear();//Get the year as a four digit number (yyyy)
var Month = d.getMonth();//Get the month as a number (0-11)
var Dat = d.getDate();//Get the day as a number (1-31)
var Hours = d.getHours();//Get the hour (0-23)
var Min = d.getMinutes();//Get the minute (0-59)
var Sec = d.getSeconds();//Get the second (0-59)
var MiliSec = d.getMilliseconds();//Get the millisecond (0-999)
var Time = d.getTime();//Get the time (milliseconds since January 1, 1970)

//e.g Print out in console
console.log(fullYear); // 2020
console.log(Month);   // 8 (as starts from 0)
console.log(Dat);    // 16

/*Note:- There are multiple methods for Date Object you can check more resources */
