function time() {
    let n = new Date();
    let day = n.getDay();
    let month = n.getMonth();
    let date = n.getDate();
    let year = n.getFullYear();
    let hrs = n.getHours();
    let min = n.getMinutes();
    let sec = n.getSeconds();

    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    document.getElementById("day").innerHTML = dayName[day];
    document.getElementById("month").innerHTML = monthName[month];
    if (date < 10) {
        document.getElementById("date").innerHTML = "0" + date;
    } else {
        document.getElementById("date").innerHTML = date;
    }
    document.getElementById("year").innerHTML = year;

    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else {
        document.getElementById("min").innerHTML = min;
    }

    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
    } else {
        document.getElementById("sec").innerHTML = sec;
    }

    if (hrs > 12) {
        document.getElementById("pm").innerHTML = "Pm";
        hrs -= 12
        document.getElementById("hrs").innerHTML = "0" + hrs;
        
    }else{
        document.getElementById("am").innerHTML = "Am";
        document.getElementById("hrs").innerHTML =hrs;
    }

    
}
setInterval(time, 1000);