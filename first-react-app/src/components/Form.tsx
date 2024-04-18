import React, { useState } from "react";

interface RentCar {
    clientName: string;
    phoneNumber: string;
    email: string;
    placeOfIssue: string;
    startRentTime: Date;
    finishRentTime: Date;
    comments: string;
}

const RentCarForm: React.FC = () => {
    const initialFormState: RentCar = {
        clientName: '',
        phoneNumber: '',
        email: '',
        placeOfIssue: '',
        startRentTime: new Date(),
        finishRentTime: new Date(),
        comments: '',
    };

    const [form, setForm] = useState<RentCar>(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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
            <input id='clientName' name="clientName" value={form.clientName} onChange={handleChange} placeholder="Client Name" />
            <input id='phoneNumber' name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
            <input id='email' name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input id='placeOfIssue' name="placeOfIssue" value={form.placeOfIssue} onChange={handleChange} placeholder="Place of Issue" />
            <input id='startRentTime' type="datetime-local" name="startRentTime" value={new Date(form.startRentTime).toISOString().slice(0,16)} onChange={handleChange} placeholder="Start Rent Time" />
            <input id='finishRentTime' type="datetime-local" name="finishRentTime" value={new Date(form.finishRentTime).toISOString().slice(0,16)} onChange={handleChange} placeholder="Finish Rent Time" />
            <textarea id='comments' name="comments" value={form.comments} onChange={handleChange} placeholder="Comments" />
            <button id='submit' type="submit">Submit</button>
            <button id='button' onClick={handleReset} type="reset">Reset</button>
        </form>
    );
};

export default RentCarForm;