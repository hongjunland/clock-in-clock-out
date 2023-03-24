// '2023-03-12' 형태를 넣어서 오늘인지 아닌지 판별
function isToday(dateString: string): boolean {
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isSameYear(dateString: string): boolean{
    const today = new Date();
    const date = new Date(dateString);
    return today.getFullYear() === date.getFullYear();
}

function dateToTime(date: Date){
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const time = `${hours}:${minutes}`;
    return time;
}

function dateToString(date: Date){
    const year = date.getFullYear();
    const month = (date.getMonth()+1).toString().padStart(2, '0');
    const day = date.getDay();
    return `${year}-${month}-${day}`
}
export { isToday, isSameYear, dateToTime, dateToString};
