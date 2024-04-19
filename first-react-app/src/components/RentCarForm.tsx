import React from "react";
import dayjs, { Dayjs } from 'dayjs';
import InputMask from 'react-input-mask';

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

interface RentCarFormProps {
    form: RentCar;
    setForm: React.Dispatch<React.SetStateAction<RentCar>>;
    onSubmit: (e: React.FormEvent) => void;
}

const RentCarForm: React.FC<RentCarFormProps> = ({ form, setForm, onSubmit}) => {
    const initialFormState: RentCar = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        placeOfIssue: '',
        startRentDate: dayjs(),
        finishRentDate: dayjs(),
        comments: '',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleDateChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [name]: dayjs(e.target.value) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    const handleReset = () => {
        setForm(initialFormState);
    };

    return (
        <form onSubmit={(e) => { handleSubmit(e); onSubmit(e); }} id='rentCar'>
            <div id='fullName'>
            <input 
                    id='firstName' 
                    name="firstName" 
                    value={form.firstName} 
                    onChange={handleChange} 
                    placeholder="First Name" 
                    required
                />
                <input 
                    id='lastName' 
                    name="lastName" 
                    value={form.lastName} 
                    onChange={handleChange} 
                    placeholder="Last Name" 
                    required
                />
            </div>
            <InputMask 
                mask="+38(099) 999 9999"
                id='phoneNumber' 
                name="phoneNumber" 
                value={form.phoneNumber} 
                onChange={handleChange} 
                placeholder="Phone Number"
                required 
            />
            <input 
                id='email' 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required
            />
            <input 
                id='placeOfIssue' 
                name="placeOfIssue" 
                value={form.placeOfIssue} 
                onChange={handleChange} 
                placeholder="Place of Issue" 
                required
            />
            <input 
                type="date" 
                id="startRentDate" 
                name="startRentDate" 
                value={form.startRentDate.format('YYYY-MM-DD')} 
                onChange={handleDateChange('startRentDate')} 
                required
            />
            <input 
                type="date" 
                id="finishRentDate" 
                name="finishRentDate" 
                value={form.finishRentDate.format('YYYY-MM-DD')} 
                onChange={handleDateChange('finishRentDate')}
                required 
            />
            <textarea
                id='comments' 
                name="comments" 
                value={form.comments} 
                onChange={handleChange} 
                placeholder="Comments" 
            />
            <div id='buttons'>
                <button 
                    id='submit' 
                    type="submit">
                        Submit
                </button>
                <button 
                    id='reset' 
                    onClick={handleReset} 
                    type="reset">
                        Reset
                </button>
            </div>
        </form>
    );
};

export default RentCarForm;