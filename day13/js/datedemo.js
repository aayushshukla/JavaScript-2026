const currentDate = new Date();
console.log("current date is", currentDate); // yyyy-mm-dd h:min:sec:ms
console.log(new Date(2026, 8)); // last day date
console.log(new Date(2026, 8, 12)); // day index from 0
console.log("complete date format", new Date(2026, 8, 11, 19, 7, 30));

console.log("get year", currentDate.getFullYear());
console.log("get month", currentDate.getMonth() + 1);
console.log("get date", currentDate.getDate());
console.log("get day number ", currentDate.getDay());
console.log("get time in ms from 1 jan 1970 till today", currentDate.getTime());
console.log(
  "get time from 1 jan 1970 till today",
  currentDate.getTime() / (1000 * 60 * 60 * 24),
);

console.log(
  "get time from 1 jan 1970 till today",
  new Date(currentDate.getTime()),
);

console.log("date in localstring", currentDate.toLocaleString());

console.log("date in localstring", currentDate.toLocaleString("en-US"));
console.log(
  "date in localstring",
  currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }),
);

console.log(currentDate.toISOString()); // DATE/TIME FORMAT ACCORDING TO ISO 8061 .It is an internation standard for representing
// dates and time  YYYY-MM-DD:THH:mm:ss:ssSZ
const today = new Date();
const dayaftertomorrow = new Date(today); // copy of current day
dayaftertomorrow.setDate(today.getDate() + 2);
console.log("date after 2 days", dayaftertomorrow);
console.log(
  dayaftertomorrow.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }),
);

const differenceInDates = dayaftertomorrow - today;
console.log(differenceInDates);
console.log("different in hours", differenceInDates / (1000 * 60 * 60));
console.log("different in days", differenceInDates / (1000 * 60 * 60 * 24));

//set timezone
console.log(
  "setting time zone america/new york",
  dayaftertomorrow.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/New_York",
  }),
);

console.log(
  "setting time zone india kolkata",
  dayaftertomorrow.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }),
);

console.log(
  "setting time zone utc",
  dayaftertomorrow.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC", // UTC + 5:30  FOR INDIA , UTC+00:00 uk
  }),
);
console.log(new Date().getUTCHours());
