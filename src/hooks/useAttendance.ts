import { useState, useCallback} from "react";
import { attendanceAPI } from "../api/attendanceAPI";
import { Attendance, User } from "../types";

export default function useAttendance(user: User) {
  const [attendance, setAttendance] = useState<Attendance>();

  const fetchAttendance = useCallback(async () => {
    const newAttendance = await attendanceAPI.fetchAttendance(user);
    setAttendance(newAttendance);
  }, [user]);
  const submitAttendance = async () => {
    if (!attendance) {
      const newAttendance = await attendanceAPI.createAttendance(user);
      setAttendance(newAttendance);
    } else {
      const newAttendance = await attendanceAPI.updateAttendance(user);
      setAttendance(newAttendance);
    }
  };

  return { attendance, submitAttendance, fetchAttendance };
}
