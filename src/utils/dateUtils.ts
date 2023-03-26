import { CURRENT_TIME } from "../constants/currentTime";
// 금일이 2023-03-17로 바꾸기
function getCurrentTime(){
  const now = new Date();
  now.setMonth(2);
  now.setDate(17);
  return now;
}
// 앞에 0
function formatDigit(value: number | string) {
  return value.toString().padStart(2, "0");
}
// 월의 마지막날
function getLastDay(year: number, month: number) {
  return new Date(year, month - 1, 0).getDate();
}
// '2023-03-12' 형태를 넣어서 오늘인지 아닌지 판별
function isToday(dateString: string): boolean {
  const today = getCurrentTime();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
// 같은 해인지 판별
function isSameYear(dateString: string): boolean {
  const today = getCurrentTime();
  const date = new Date(dateString);
  return today.getFullYear() === date.getFullYear();
}
// date를 'hh:mm'와 같은 형태로 바꿈
function dateToTime(date: Date) {
  const hours = formatDigit(date.getHours());
  const minutes = formatDigit(date.getMinutes());
  const time = `${hours}:${minutes}`;
  return time;
}
// date를 yyyy-mm-dd 형태로 바꿈
function dateToString(date: Date) {
  const year = date.getFullYear();
  const month = formatDigit(date.getMonth() + 1);
  const day = formatDigit(date.getDate());
  return `${year}-${month}-${day}`;
}
// 두 시각의 간격 구하기
function getTimeDiff(time1: string, time2: string): number {
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  const date1 = new Date();
  date1.setHours(hours1);
  date1.setMinutes(minutes1);

  const date2 = new Date();
  date2.setHours(hours2);
  date2.setMinutes(minutes2);

  const diff = Math.abs(date1.getTime() - date2.getTime());

  return Math.floor(diff / (1000 * 60));
}

// 해당 날짜를 넣으면 같은 주의 날짜들을 담은 리스트를 반환
function getWeekDates (date: Date){
  const currentDate = new Date(date);
  const currentDayOfWeek = currentDate.getDay();
  const monday = new Date(currentDate.setDate(currentDate.getDate() - currentDayOfWeek + 1));
  const weekDates = [dateToString(monday)];
  
  for (let i = 1; i < 7; i++) {
    const nextDay = new Date(monday);
    nextDay.setDate(monday.getDate() + i);
    weekDates.push(dateToString(nextDay));
  }
  
  return weekDates;
};

export {
  getCurrentTime,
  formatDigit,
  getLastDay,
  isToday,
  isSameYear,
  dateToTime,
  dateToString,
  getTimeDiff,
  getWeekDates,
};
