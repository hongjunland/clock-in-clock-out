import { NotChecked } from "../constants/status";
import { attendancesData } from "../dummy/dummyData";
import { Attendance } from "../types/Attendance";
import { User } from "../types/User";
import {
  dateToString,
  dateToTime,
  getCurrentTime,
  getTimeDiff,
  getWeekDates,
  isSameYear,
  isToday,
} from "../utils/dateUtils";

// 잔여 연차 가져오기
async function fetchAnnual(user: User) {
  await new Promise((re) => setTimeout(re, 100));
  const annualCount = attendancesData.filter(
    (el: Attendance) =>
      user.id === el.userId && isSameYear(el.date) && el.annual
  );
  return user.annual - annualCount.length;
}

// 오늘 근무기록 보기
async function fetchAttendance(user: User) {
  await new Promise((re) => setTimeout(re, 100));
  const attendance = attendancesData.find(
    (el: Attendance) => user.id === el.userId && isToday(el.date)
  );
  return attendance;
}

// 출근 시작
async function createAttendance(user: User) {
  await new Promise((re) => setTimeout(re, 100));
  const newId = attendancesData[attendancesData.length - 1].id + 1;
  const now = getCurrentTime();
  const newAttendance: Attendance = {
    id: newId,
    userId: user.id,
    date: dateToString(now),
    startTime: dateToTime(now),
    endTime: NotChecked,
    annual: false,
  };
  attendancesData.push(newAttendance);
  return newAttendance;
}
// 퇴근
async function updateAttendance(user: User) {
  await new Promise((re) => setTimeout(re, 100));
  const attendance = await fetchAttendance(user);
  if (attendance?.endTime === NotChecked) {
    const newAttendance: Attendance = {
      ...attendance,
      endTime: dateToTime(getCurrentTime()),
    };
    const idx = attendancesData.findIndex(
      (el: Attendance) => el.id === attendance.id
    );
    attendancesData[idx] = newAttendance;
    return newAttendance;
  }
  return attendance;
}

// 연차 등록
async function createAnnual(user: User, date: Date) {
  await new Promise((re) => setTimeout(re, 100));
  const newId = attendancesData[attendancesData.length - 1].id + 1;
  const newAttendance = {
    id: newId,
    date: dateToString(date),
    userId: user.id,
    startTime: NotChecked,
    endTime: NotChecked,
    annual: true,
  };
  attendancesData.push(newAttendance);
  console.log(attendancesData);
  return newAttendance;
}

// 금주 근무기록
async function fetchAttendancesWeek(user: User) {
  await new Promise((re) => setTimeout(re, 100));
  const now = new Date('2023-03-17');
  const workhours = [0, 0, 0, 0, 0, 0, 0];
  const dates = getWeekDates(now);
  dates.forEach((date: string, idx: number) => {
    const attendance = attendancesData.find(
      (el: Attendance) => el.userId === user.id && el.date === date
    );
    if(attendance && attendance?.startTime !== NotChecked && attendance?.endTime !== NotChecked){
      workhours[idx] = getTimeDiff(attendance.startTime, attendance.endTime);
    }
  });
  return workhours;
}

export const attendanceAPI = {
  fetchAttendance,
  fetchAnnual,
  updateAttendance,
  createAttendance,
  createAnnual,
  fetchAttendancesWeek,
};
