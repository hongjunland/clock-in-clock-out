// utils.ts

import { useState, useCallback, useEffect } from "react";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";

export default function useAnnual(user: User) {
    const [annual, setAnnual] = useState(0);

    const getAnnual = useCallback(async () => {
        const newAnnual = await attendanceAPI.fetchAnnual(user);
        setAnnual(newAnnual);
      }, [user]);

  return {annual, getAnnual};
}
