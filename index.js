
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();
const currentDayOfWeek = now.getDay();
const dayOfWeekString = daysOfWeek[currentDayOfWeek];

const dayOfWeekElement = document.getElementById('currentDayOfTheWeek');
dayOfWeekElement.textContent = ("Today is " + dayOfWeekString);

const utcTimeMilliseconds = now.getTime();

const utcMilli = document.getElementById('currentUTCTime')
utcMilli.textContent= ("Current UTC Time in milliseconds: " + utcTimeMilliseconds);