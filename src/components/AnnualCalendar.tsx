import styled from "@emotion/styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { dateToString } from "../utils/dateUtils";

const SelectedDate = styled.div`
  background-color: red;
  color: white;
`;
interface Props{
  data: Date[];
  selected: Date;
  onChangeSelect: (date: Date)=>void;
}

function AnnualCalendar({data, selected, onChangeSelect}:Props) {

  function handleDateChange(value: Value, e: React.MouseEvent<HTMLButtonElement>) {
    if (value) {
      onChangeSelect(new Date(value.toString()));
    }
  }
  function isAnnual(date: Date){
    const newDate = data.find((el: Date)=> dateToString(el) === dateToString(date));
    if(newDate){
      return true;
    }
    return false;
  }

  function tileContent({ date, view }: { date: Date; view: string }) {
    if (isAnnual(date)) {
      return <SelectedDate>{'연차'}</SelectedDate>;
    }
  }

  return (
    <div>
      <h2>연차 신청</h2>
      <Calendar
        onChange={handleDateChange}
        value={selected}
        tileContent={tileContent}
      />
    </div>
  );
}

export default AnnualCalendar;
