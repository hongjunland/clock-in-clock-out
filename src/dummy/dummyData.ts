import { Attendance } from "../types/Attendance"
import { Todo } from "../types/Todo"
import { User } from "../types/User"

export const userData : User= {
    id: 1,
    userName: 'John',
    annual: 15,
}

export const todosData : Todo[] = [
    {id: 1, author: 1, content: '오늘의 일정!'}
]

export const attendancesData : Attendance[] = [
    {
        id: 1,
        date: '2023-03-13',
        userId: 1,
        startTime: '09:00',
        endTime: '18:00',
        annual: false,
    },
    {
        id: 2,
        date: '2023-03-14',
        userId: 1,
        startTime: '09:30',
        endTime: '17:00',
        annual: false,
    },
    {
        id: 3,
        date: '2023-03-15',
        userId: 1,
        startTime: 'unknown',
        endTime: 'unknown',
        annual: true,
    }
    ,{
        id: 4,
        date: '2023-03-16',
        userId: 1,
        startTime: '08:30',
        endTime: '19:40',
        annual: false,
    },
    {
        id: 5,
        date: '2023-03-17',
        userId: 1,
        startTime: 'unknown',
        endTime: 'unknown',
        annual: false,
    },
]

export const annualsData = [
    {
        id: 1, 
        date: '2023-03-15',
        userId: 1
    }
]