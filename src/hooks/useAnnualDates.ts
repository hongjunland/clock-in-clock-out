import { useState, useCallback } from "react";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";

export default function useAnnualDates(user: User) {
  const [annualDates, setAnnualDates] = useState<Date[]>([]);

  const fetchAnnualDates = useCallback(async () => {
    const newAnnualDates = await attendanceAPI.fetchAnnualDates(user);
    setAnnualDates(newAnnualDates);
  }, [user]);

  return { annualDates, fetchAnnualDates };
}
