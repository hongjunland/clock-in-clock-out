import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { getCurrentTime } from "../utils/dateUtils";

function AnnualCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(value: Value) {
    console.log(value);
    if (value) {
      setSelectedDate(new Date(value.toString()));
    }
  }

  return (
    <div>
      <h2>Choose a date:</h2>
      <Calendar onChange={handleDateChange} value={selectedDate}/>
    </div>
  );
}

export default AnnualCalendar;
