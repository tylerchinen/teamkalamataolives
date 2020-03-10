from datetime import datetime
from icalendar import Calendar, Event

cal = Calendar()

event = Event()

time = '10-13'
date = '03/13/2020'

time = time.split('-')
date = date.split('/')
start = datetime(int(date[2]), int(date[0]), int(date[1]),
                                       int(time[0]), 0, 0)
end = datetime(int(date[2]), int(date[0]), int(date[1]),
                                       int(time[1]), 0, 0)                                  
event.add('summary', 'Study for exam')
event.add('dtstart', start)
event.add('dtend', end)
event.add('description', 'Study for exam, 10am-1pm HST, 13 March 2020, in Hamilton Library')
event.add('location',  'Hamilton Library')
cal.add_component(event)

f = open('studytime.ics', 'wb')
f.write(cal.to_ical())
f.close()