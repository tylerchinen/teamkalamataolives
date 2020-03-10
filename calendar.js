function makeICS() {
    let name = "Study For Exam"
    let startTime = "10:00";
    let endTime = "13:00";
    let startDate = "03/13/2020"
    let endDate = "03/13/2020"
    let location = "Hamilton Library"

    startDate = startDate.split('/');
    endDate = endDate.split('/');
    startTime = startTime.split(":")
    endTime = endTime.split(":")
    
    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:" + (startDate[2] + startDate[0] + startDate[1]) + "T" + startTime[0] + startTime[1] + "00" + "Z" +  "\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Me:MAILTO::me@gmail.com\nDTSTART:" + (startDate[2] + startDate[0] + startDate[1]) + "T" + startTime[0] + startTime[1] + "00" + "Z" + "\nDTEND:" + (endDate[2] + endDate[0] + endDate[1]) + "T" + endTime[0] + endTime[1] + "00" + "Z" + "\nLOCATION:" + location + "\nSUMMARY:" + name + "\nEND:VEVENT\nEND:VCALENDAR";
    console.log(icsMSG);
    window.open( "data:text/calendar;charset=utf8," + escape(icsMSG));
}

makeICS();
