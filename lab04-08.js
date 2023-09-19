// Exercise 8: Moment.js Dates (Page 88)
// For question 2 (years, months & days between birthdate and current date), don’t fret too much if you don’t get a hyper accurate representation. Make sure you follow the Moment.js documentation to know the kinds of functions available and make best use of them.

// Using the Moment.js library, try to solve the
// below problems:
// 1. Calculate the number of days between
// your birthdate and the current date
const moment = require('moment');

const currentDate = moment();
const birthDate = moment('1993-11-17');
const differentDays = currentDate.diff(birthDate, 'days');

console.log(differentDays);

// 2. Display the number of years, months,
// and days between your birthdate and
// current date
// Example: 24 years, 8 months, and 26 days
const diffYears = currentDate.diff(birthDate, 'years');
const diffMonths = currentDate.diff(birthDate, 'months') %12;
const diffDays = currentDate.diff(birthDate, 'days') %30;

console.log(`${diffYears} years, ${diffMonths} months, & ${diffDays} days.`);

// 3. Given two dates, display the date closest
// to the current date

function closestD(date1, date2) {
    const currentD = moment();
    const diff1 = Math.abs(currentD.diff(date1));
    const diff2 = Math.abs(currentD.diff(date2));

    if (diff1 < diff2) {
        return `This is the closest date ${date1}`;
    } else {
        return `This is the closest date ${date2}`;
    };
    };

const date1 = moment('2022-01-01');
const date2 = moment('2023-01-01');
const closestDate = closestD(date1, date2);
console.log(closestDate);

// 4. Given two dates, display whether the first
// date is before or after the second date

function isFirst(date3, date4) {
    if (date3.isBefore(date4)) {
        return `${date3} (first date)is before the second date!`;
    } else {
        return `${date3} (first date)is not before the second date`;
    };
};

const date3 = moment('2022-01-01');
const date4 = moment('2023-01-01');
const isFirst2 = isFirst(date3, date4);
console.log(isFirst2);

// 5. Display the current time in London
const moment2 = require('moment-timezone');
const currentTime = moment2().tz('Europe/London');
const formattedTime = currentTime.format('HH:mm');
console.log(`The current time in London is: ${formattedTime}`);

const currentTime2 = moment();
currentTime2.tz('Europe/Paris');
const formattedTime2 = currentTime2.format('HH:mm');
console.log(`The current time in Paris is: ${formattedTime2}`);


