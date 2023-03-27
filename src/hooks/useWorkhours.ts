// utils.ts

import { useState, useCallback, useEffect } from "react";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";

export default function useAttendance(user: User) {
  const [workhours, setWorkhours] = useState<number[]>(new Array(7).fill(0));

  const getWorkhours = useCallback(async () => {
    const newWorkHours = await attendanceAPI.fetchAttendancesWeek(user);
    setWorkhours(newWorkHours);
  }, [user]);

  return { workhours, getWorkhours };
}
