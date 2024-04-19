import React, { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';

interface RentCar {
    clientName: string;
    phoneNumber: string;
    email: string;
    placeOfIssue: string;
    startRentDate: Dayjs;
    finishRentDate: Dayjs;
    comments: string;
}

const RentCarForm: React.FC = () => {
    const initialFormState: RentCar = {
        clientName: '',
        phoneNumber: '',
        email: '',
        placeOfIssue: '',
        startRentDate: dayjs(),
        finishRentDate: dayjs(),
        comments: '',
    };

    const [form, setForm] = useState<RentCar>(initialFormState);

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
        <form onSubmit={handleSubmit} id='rentCar'>
            <input 
                id='clientName' 
                name="clientName" 
                value={form.clientName} 
                onChange={handleChange} 
                placeholder="Client Name" 
            />
            <input 
                id='phoneNumber' 
                name="phoneNumber" 
                value={form.phoneNumber} 
                onChange={handleChange} 
                placeholder="Phone Number" 
            />
            <input 
                id='email' 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Email" 
            />
            <input 
                id='placeOfIssue' 
                name="placeOfIssue" 
                value={form.placeOfIssue} 
                onChange={handleChange} 
                placeholder="Place of Issue" 
            />
            <input 
                type="date" 
                id="startRentDate" 
                name="startRentDate" 
                value={form.startRentDate.format('YYYY-MM-DD')} 
                onChange={handleDateChange('startRentDate')} 
            />
            <input 
                type="date" 
                id="finishRentDate" 
                name="finishRentDate" 
                value={form.finishRentDate.format('YYYY-MM-DD')} 
                onChange={handleDateChange('finishRentDate')} 
            />
            <textarea
                id='comments' 
                name="comments" 
                value={form.comments} 
                onChange={handleChange} 
                placeholder="Comments" />
            <button 
                id='submit' 
                type="submit">
                    Submit
            </button>
            <button 
                id='button' 
                onClick={handleReset} 
                type="reset">
                    Reset
            </button>
        </form>
    );
};

export default RentCarForm;