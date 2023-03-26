import { NotChecked, StatusButton } from "../constants/status";
import { Attendance } from "../types";

function getAttendanceStatus(attendance?: Attendance){
    if(attendance === undefined)
        return StatusButton.clockIn;
    if(attendance.endTime === NotChecked)
        return StatusButton.clockOut
    return StatusButton.exited;
}
function isExited(attendance?:Attendance){
    if(getAttendanceStatus(attendance)===StatusButton.exited){
        return true;
    }
    return false;
}

export {getAttendanceStatus, isExited};