// utils.ts

import { useState, useCallback, useEffect } from "react";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";

export default function useAnnualDates(user: User) {
  const [annualDates, setAnnualDates] = useState<Date[]>([]);

  const getAnnualDates = useCallback(async () => {
    const newAnnualDates = await attendanceAPI.fetchAnnualDates(user);
    setAnnualDates(newAnnualDates);
  }, [user]);

  return { annualDates, getAnnualDates };
}
