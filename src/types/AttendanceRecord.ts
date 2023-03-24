export interface AttendanceRecord{
    id: number;
    userId: number;
    date: Date;
    startTime: string;
    endTime: string;
    annual: boolean;
}