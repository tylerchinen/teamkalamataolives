function makeICS(){
  var start_date = new Date (2020,1,10);
  var cal_date = start_date;
  var cal_year;
  var cal_month;
  var cal_day;
  var cal_set;
  var seprate = "<p>";
  var x;
}

function addWeek(cal_date){
  cal_date.setDate(cal_date.getDate( + 7));
  var day_set = cal_date;
  var less_day;
  var add_day = cal_date = cal_date = getDate();
  var mmonth = cal_date.getMonth();
  var yyear = cal_date.getFullYear();

  if ( mmonth === 4 || mmonth === 6 || mmonth === 9 || mmonth === 11){
    add_day++;
    day_set.setDate(add_day);
    less_day = add_day - 1;
  }
  else if (mmonth === 2 & (yyear%4 === 0)){
    add_day = add_day + 3;
    day_set.setDate(add_day);
    less_day = add_day - 3;
  }
  else if (mmonth === 2 && (yyear%4 != 0)) {
    add_day = add_day + 4;
    day_set.setDate(add_day);
    less_day = add_day - 4;
  }
  else {
    less_day = add_day;
  };
  if (less_day > 30){
    cal_date.setMonth(cal_date.getMonth()- 1)
  }
  cal_date.setDate(day_set.getDate());
  cal_date.setDate(less_day);
}
document.write("<p>BEGIN:VCALENDAR<br />VERSION:2.0<br />X-WR-CALNAME:WEEKNUMBERS<br />X-WR-TIMEZONE:America/Chicago<br />CALSCALE:GREGORIAN</p>");


for (i = 1; i <= 52; i ++){
  cal_year = cal_date.getFullYear().toString();
  cal_month = ((cal_date.getMonth()+ 1)< 10 ? "0" + cal_date.getMonth()+ 1);
  cal_day = (cal_day.getDate() < 10 ? "0" + cal_date(); "" cal_date.getDate());
  cal_set = cal_year + cal_month +cal_day;

  document.write(addSpace + "BEGIN:VEVENT" + "<br /");
  document.write("DSTART;VALUE=DATE:" + cal_set + "<br /");
  document.write("DTEJD;VALUE=DATE" + cal_set + "<br /");
  document.write("END:VEVENT </p");

  addWeek(cal_date);
  addSpace = "<p>&nbsp";

  if (cal_date.getFullYear() != start_date.getFullYear())
  {
    i = 53
  };
};
