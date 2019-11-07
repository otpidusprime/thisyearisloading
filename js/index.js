function global() {
  function days_of_a_year(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }

  function milliseconds_year() {
    var dateObj = new Date();
    var dateInit = new Date(dateObj.getFullYear(), "0", "1");
    dateInit = Math.round(dateInit.getTime() / 1);

    var dateCurrent = Math.round(dateObj.getTime() / 1);

    return dateCurrent - dateInit;
  }

  function seconds_year() {
    var dateObj = new Date();
    var dateInit = new Date(dateObj.getFullYear(), "0", "1");
    dateInit = Math.round(dateInit.getTime() / 1000);

    var dateCurrent = Math.round(dateObj.getTime() / 1000);

    return dateCurrent - dateInit;
  }

  function minutes_year() {
    var dateObj = new Date();
    var dateInit = new Date(dateObj.getFullYear(), "0", "1");
    dateInit = Math.round(dateInit.getTime() / 60000);

    var dateCurrent = Math.round(dateObj.getTime() / 60000);

    return dateCurrent - dateInit;
  }

  function hours_year() {
    var dateObj = new Date();
    var dateInit = new Date(dateObj.getFullYear(), "0", "1");
    dateInit = Math.round(dateInit.getTime() / 3600000);

    var dateCurrent = Math.round(dateObj.getTime() / 3600000);

    return dateCurrent - dateInit;
  }

  function calculate(currentDay, totalDays) {
    var pPos = totalDays;
    var pEarned = currentDay;
    var perc = "";
    if (isNaN(pPos) || isNaN(pEarned)) {
      perc = " ";
    } else {
      perc = (pEarned / pPos * 100).toFixed(3);
    }

    return perc;
  }

  var currentYear = new Date().getFullYear();
  var totalamtDays = days_of_a_year(currentYear);
  var now = new Date();
  var start = new Date(currentYear, 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var sevenDays = (1000 * 60 * 60 * 24)*7;
  var day = Math.floor(diff / oneDay);
  var week = Math.floor(diff / sevenDays)+1;

  var getPerc = calculate(day, totalamtDays);

  var dateObj = new Date();
  var currentmonthnumber = dateObj.getMonth();
  var totalhoursthisyear = 24 * totalamtDays;
  var totalminutesthisyear = 1440 * totalamtDays;
  var totalsecondsthisyear = 86400 * totalamtDays;
  var totalmillisecondsthisyear = 86400000 * totalamtDays;

  console.log(currentYear + ": " + totalamtDays);
  console.log("Day of year: " + day);
  console.log("Week of year: " + week);
  console.log("Percentage: " + getPerc + " %");

  setInterval(function() {
    var getPercRealTime = calculate(day, totalamtDays);
    $(".loader_percent").html(getPercRealTime);
    $(".loader_meter > span").css("width", getPercRealTime + "%");
  }, 100);

  $(".subdetail_months").html(currentmonthnumber + 1 + " / 12");
  $(".subdetail_weeks").html(week + " / 52");
  $(".subdetail_days").html(day + " / " + totalamtDays);

  $("head").append(
    $(
      '<style>.loader_percent:after { content: "OF ' +
        currentYear +
        ', LOADED!" }</style>'
    )
  );

  setInterval(function() {
    var hourscurrentyear = hours_year();
    $(".subdetail_hours").html(hourscurrentyear + " / " + totalhoursthisyear);

    var minutescurrentyear = minutes_year();
    $(".subdetail_minutes").html(
      minutescurrentyear + " / " + totalminutesthisyear
    );

    var secondscurrentyear = seconds_year();
    $(".subdetail_seconds").html(
      secondscurrentyear + " / " + totalsecondsthisyear
    );
  }, 1000);

  setInterval(function() {
    var millisecondscurrentyear = milliseconds_year();
    $(".subdetail_milliseconds").html(
      millisecondscurrentyear + " / " + totalmillisecondsthisyear
    );
  }, 1);

  function daytimecolors() {
    var hr = new Date().getHours();

    if (hr >= 0 && hr < 4) {
      $("body")
        .removeClass()
        .addClass("night");
    } else if (hr >= 4 && hr < 7) {
      $("body")
        .removeClass()
        .addClass("earlymorning");
    } else if (hr >= 7 && hr < 11) {
      $("body")
        .removeClass()
        .addClass("morning");
    } else if (hr >= 11 && hr < 16) {
      $("body")
        .removeClass()
        .addClass("afternoon");
    } else if (hr >= 16 && hr < 18) {
      $("body")
        .removeClass()
        .addClass("goldenhour");
    } else if (hr >= 18 && hr < 19) {
      $("body")
        .removeClass()
        .addClass("evening");
    } else if (hr >= 19 && hr <= 23) {
      $("body")
        .removeClass()
        .addClass("night");
    }
  }
  
  daytimecolors();
  setInterval(daytimecolors, 1000);

  function resize_respond() {}

  $(window).resize(resize_respond);
  
  var scene = document.getElementById("daytime_scene");
  var parallax = new Parallax(scene);
}
/*GLOBALS*/

global();