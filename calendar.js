function makeICS() {
    
    let name = document.getElementById("name").value;
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let location = document.getElementById("location").value;
    let filename = name;

    startDate = startDate.split('-');
    endDate = endDate.split('-');
    startTime = startTime.split(":")
    endTime = endTime.split(":")
    
    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:" + (startDate[2] + startDate[0] + startDate[1]) + "T" + startTime[0] + startTime[1] + "00" + "Z" +  "\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Me:MAILTO::me@gmail.com\nDTSTART:" + (startDate[0] + startDate[1] + startDate[2]) + "T" + startTime[0] + startTime[1] + "00" + "Z" + "\nDTEND:" + (endDate[0] + endDate[1] + endDate[2]) + "T" + endTime[0] + endTime[1] + "00" + "Z" + "\nLOCATION:" + location + "\nSUMMARY:" + name + "\nEND:VEVENT\nEND:VCALENDAR";
   var element = document.createElement('a');
    console.log(icsMSG);
    
    element.setAttribute('href', "data:text/calendar;charset=utf8," + escape(icsMSG))
    element.setAttribute('download', filename + ".ics");
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    window.open( );
     
}

function addRow () {

    let name = document.getElementById("name").value;
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;
    let startDate =document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let location = document.getElementById("location").value;

    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= name;
    row.insertCell(2).innerHTML= startTime;
    row.insertCell(3).innerHTML= endTime;
    row.insertCell(4).innerHTML= startDate;
    row.insertCell(5).innerHTML= endDate;
    row.insertCell(6).innerHTML= location;

}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}

function addTable() {

    var myTableDiv = docuemt.getElementById("calendarTable");

    var table = document.createElement('TABLE');
    table.border = 1;

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i=0; i<12; i++){
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        
        for (var j=0; j<12; j++){
            var td = document.createElement('TD');
            td.width='75';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
     }
     myTableDiv.appendChild(table);
     
 }