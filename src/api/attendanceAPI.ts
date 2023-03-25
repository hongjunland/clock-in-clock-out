import { attendancesData } from "../dummy/dummyData";
import { Attendance } from "../types/Attendance";
import { User } from "../types/User";
import { dateToString, dateToTime, isSameYear, isToday } from "../utils/dateUtils";

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
async function createAttendance(user:User){
    await new Promise((re) => setTimeout(re, 1000));
    const newId = attendancesData[attendancesData.length-1].id+1;
    const now = new Date();
    const newAttendance : Attendance = {
        id: newId,
        userId: user.id,
        date: dateToString(now),
        startTime: dateToTime(now),
        endTime: 'unknown',
        annual: false
    } 
    attendancesData.push(newAttendance);
    return newAttendance;
}
async function updateAttendance(user: User){
    await new Promise((re) => setTimeout(re, 1000));
    const attendance = await fetchAttendance(user);
    if(attendance?.endTime === 'unknown'){
        const newAttendance : Attendance = {...attendance, endTime: dateToTime(new Date())};
        console.log(newAttendance);
        return newAttendance;
    }
}
  export const attendanceAPI = {
    fetchAttendance,
    fetchAnnual,
    updateAttendance,
    createAttendance,
  };
  