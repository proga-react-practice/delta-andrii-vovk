import dayjs, { Dayjs } from 'dayjs';

export interface RentCar {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    placeOfIssue: string;
    startRentDate: Dayjs;
    finishRentDate: Dayjs;
    comments: string;
}

export const initialFormState: RentCar = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    placeOfIssue: '',
    startRentDate: dayjs(),
    finishRentDate: dayjs(),
    comments: '',
};

export interface FieldErrors {
    firstName: boolean;
    lastName: boolean;
    phoneNumber: boolean;
    email: boolean;
    placeOfIssue: boolean;
}