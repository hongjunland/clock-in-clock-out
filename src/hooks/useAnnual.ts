import { useState, useCallback } from "react";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";

export default function useAnnual(user: User) {
  const [annual, setAnnual] = useState(0);

  const fetchAnnual = useCallback(async () => {
    const newAnnual = await attendanceAPI.fetchAnnual(user);
    setAnnual(newAnnual);
  }, [user]);
  const updateAnnual = async (selected: Date, callback: () => void) => {
    if (selected) {
      const newDate = new Date(
        `${selected?.getFullYear()}-${
          selected?.getMonth() + 1
        }-${selected?.getDate()}`
      );
      const newAttendance = await attendanceAPI.createAnnual(user, newDate);
      callback();
    }
  };

  return { annual, fetchAnnual, updateAnnual };
}
