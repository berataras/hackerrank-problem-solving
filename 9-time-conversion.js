//Time Conversion

/*
* Given a time in -hour AM/PM format, convert it to military (24-hour) time.
* Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
* - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

function timeConversion(s) {
    const splitTime = s.split(":");
    let hours = splitTime[0];
    const minutes = splitTime[1];
    const seconds = splitTime[2].replace("PM", "").replace("AM", "");

    if (hours === '12') {
        hours = '00';
    }

    if (splitTime[2].includes("PM")) {
        hours = parseInt(hours) + 12;
    }

    return `${hours}:${minutes}:${seconds}`;
}
