const hourEl = document.querySelector('.hour');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const periodEl = document.querySelector(".period");

const dayEL = document.querySelector('.day-name');
const monthEL = document.querySelector('.month-name');
const yearEl = document.querySelector('.year-name');


const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat']
const Months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JLY', 'AGST', 'SEP', 'OCT', 'NOV', 'DEC']

const clock = () => {
    const date = new Date();

    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hourEl.textContent = addZero(period(hr));
    minutesEl.textContent = addZero(min);
    secondsEl.textContent = addZero(sec);
    periodEl.textContent = setTimePeriod(hr);
}

function setTimePeriod(time) {
    let ampm = '';
    if (time < 12) {
        ampm = 'AM';
    } else {
        ampm = 'PM'
    }
    return ampm;
}

function period(time) {
    if (time > 12) {
        time = time - 12;
    }
    return time;
}

function addZero(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

const getCalendar = () => {
    const date = new Date();
    dayEL.innerText = days[date.getDay()];
    monthEL.innerText = Months[date.getMonth()];
    yearEl.innerText = date.getFullYear();
}

setInterval(clock, 1000);
getCalendar()
