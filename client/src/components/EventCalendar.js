import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EventCalendar({ events }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      onChange={setSelectedDate}
      value={selectedDate}
      tileContent={({ date, view }) => {
        const event = events.find((event) => event.selectedDate.toDateString() === date.toDateString());
        if (event) {
          return <div className="event-marker">{event.title}</div>;
        }
        return null;
      }}
    />
  );
}

export default EventCalendar;
