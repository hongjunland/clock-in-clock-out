export interface AttendanceRecord{
    id: number;
    userId: number;
    date: Date;
    startTime: Date;
    endTime: Date;
    annual: boolean;
}