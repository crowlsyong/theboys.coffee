function showDateTime() {
    var date_timejs = document.getElementById("date_timejs");
  
    var date = new Date();
    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];

    //original today-variable. removing commmas and the year to slim it down
    //var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
    //new one
    var today = `${dayName}, ${monthName} ${date.getDate()}`;
    //above is new today-variable
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    var time = hour + ":" + min + ":" + sec;
    // original, includes extra text and the exact time ---
    //date_timejs.innerText = `Today is  ${today}. Time is ${time}`;
    //new one
    date_timejs.innerText = `${today}`;
    //above is the new
  }
  setTimeout(showDateTime, 0);