import { attendancesData } from "../dummy/dummyData";
import { Attendance } from "../types/AttendanceRecord";
import { User } from "../types/Users";
import { isSameYear, isToday } from "../utils/dateUtils";

async function fetchAnnual(user: User){
    await new Promise((re) => setTimeout(re, 1000));
    const annualCount = attendancesData.filter((el: Attendance)=> user.id === el.userId && isSameYear(el.date) && el.annual)
    return user.annual - annualCount.length;
}

async function fetchAttendance(user: User) {
    await new Promise((re) => setTimeout(re, 1000));
    const attendance = attendancesData.find((el: Attendance)=> user.id === el.userId && isToday(el.date))
    return attendance;
}
  export const attendanceAPI = {
    fetchAttendance,
    fetchAnnual,
  };
  