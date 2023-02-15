var moment = require('moment'); // require
moment().format(); 
const days = [
    {day: 19, sign: 'Capricorn'},
    {day: 50, sign: 'Aquarius'},
    {day: 79, sign: 'Pisces'},
    {day: 109, sign: 'Aries'},
    {day: 140, sign: 'Taurus'},
    {day: 171, sign: 'Gemini'},
    {day: 203, sign: 'Cancer'},
    {day: 234, sign: 'Leo'},
    {day: 265, sign: 'Virgo'},
    {day: 295, sign: 'Libra'},
    {day: 325, sign: 'Scorpio'},
    {day: 355, sign: 'Sagittarius'},
]

// const dayOfYear = moment().dayOfYear();
// getSignByDates(dayOfYear);

function getSignByDates(dayOfYear) {
    for (let item of days) {
        if (dayOfYear <= item.day) {
            return item.sign;
        }
    }

    return days[0].sign;
}

module.exports = getSignByDates;
