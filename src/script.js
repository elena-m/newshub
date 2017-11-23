function updateTime() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    if (currentMinute < 10) {
        currentMinute = "0" + currentMinute;
    }
    
    if (currentSecond < 10) {
        currentSecond = "0" + currentSecond;
    }

    let currentTime = "Time is: " + currentHour + ":" + currentMinute + ":" + currentSecond;

    document.getElementById("time").innerText = currentTime;
} 

setInterval(updateTime, 1000);

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("text").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "paragraphs.html", true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', loadDoc);