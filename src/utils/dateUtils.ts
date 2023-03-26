// '2023-03-12' 형태를 넣어서 오늘인지 아닌지 판별
function formatDigit(value: number | string) {
  return value.toString().padStart(2, "0");
}
function getLastDay(year: number, month: number){
  return new Date(year, month -1 , 0).getDate();
}
function isToday(dateString: string): boolean {
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isSameYear(dateString: string): boolean {
  const today = new Date();
  const date = new Date(dateString);
  return today.getFullYear() === date.getFullYear();
}

function dateToTime(date: Date) {
  const hours = formatDigit(date.getHours());
  const minutes = formatDigit(date.getMinutes());
  const time = `${hours}:${minutes}`;
  return time;
}

function dateToString(date: Date) {
  const year = date.getFullYear();
  const month = formatDigit(date.getMonth() + 1);
  const day = formatDigit(date.getDate());
  return `${year}-${month}-${day}`;
}
export { formatDigit, getLastDay, isToday, isSameYear, dateToTime, dateToString };
