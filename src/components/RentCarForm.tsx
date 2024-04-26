import React, { useState } from "react";
import dayjs from 'dayjs';
import InputMask from 'react-input-mask';
import { RentCar, initialFormState } from '../interfaces';
import { TextField, Button, Box, useTheme } from '@mui/material';

interface RentCarFormProps {
    form: RentCar;
    setForm: React.Dispatch<React.SetStateAction<RentCar>>;
    onSubmit: (e: React.FormEvent) => void;
}

const RentCarForm: React.FC<RentCarFormProps> = ({ form, setForm, onSubmit}) => {

    const theme = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleDateChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [name]: dayjs(e.target.value) });
    };

    const handleReset = () => {
        setForm(initialFormState);
    };

    const [startRentDate, setStartRentDate] = useState(new Date().toISOString().split('T')[0]);

    const handleStartRentDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextDay = dayjs(e.target.value).add(1, 'day').format('YYYY-MM-DD');
        setStartRentDate(nextDay);
        handleDateChange('startRentDate')(e);
    };

    const FormStyle = {
        minWidth: '250px',
        maxWidth: '300px',
        marginLeft: '100px',
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '70px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.20)',
        '@media (max-width: 1420px)': {
            marginLeft: '250px',
        },
        '@media (max-width:1081px)': {
            marginLeft: '120px',
        },
        '@media (max-width: 811px)': {
            marginLeft: '168px',
        },
        '@media (max-width: 450px)': {
            marginLeft: '40px',
        },
        '@media (max-width: 380px)': {
            marginLeft: '50px',
            maxWidth: '250px',
        },
    }

    const FullNameStyle = {
        width: '97%',
        display: 'flex',
        justifyContent: 'space-between',
    }

    const FirstAndLastNameStyle = {
        width: 'calc(50% - 5px)',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        fontSize: '16px',
        color: '#333',
        fontFamily: theme.typography.fontFamily,
    }

    const TextFieldStyle = {
        width: '90%',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        fontSize: '16px',
        color: '#333',
        fontFamily: theme.typography.fontFamily,
    }

    const SubmitButtonStyle = {
        width: '44%',
        padding: '5px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '5px',
        color: '#ffffff',
        backgroundColor: '#007bff',
        marginRight: '10%', 
        '&:hover': {
            backgroundColor: '#003d7f',
        },
    }

    const ResetButtonStyle = {
        width: '44%',
        padding: '5px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '5px',
        color: '#ffffff',
        backgroundColor: '#dc3545',
        '&:hover': {
            backgroundColor: '#9a000f',
        },
    }

    return (
        <Box 
            component="form" 
            onSubmit={(e) => { onSubmit(e); }} 
            sx={FormStyle}
        >
            <Box 
                id="fullName" 
                sx={FullNameStyle}
            >
                <TextField 
                    className="firstName" 
                    label="First Name"
                    name="firstName" 
                    value={form.firstName} 
                    onChange={handleChange} 
                    placeholder="First Name" 
                    required
                    inputProps = {{ pattern: "^[A-Z][a-z]*$" }}
                    title="First name must start with a capital letter and contain only letters."
                    sx={FirstAndLastNameStyle}
                />
                <TextField 
                    className="lastName" 
                    label="Last Name"
                    name="lastName" 
                    value={form.lastName} 
                    onChange={handleChange} 
                    placeholder="Last Name" 
                    required
                    inputProps = {{ pattern: "^[A-Z][a-z]*$" }}
                    title="Last name must start with a capital letter and contain only letters."
                    sx={FirstAndLastNameStyle}
                />
            </Box>
            <InputMask
                mask="+38(099) 999 9999"
                value={form.phoneNumber}
                onChange={handleChange}
            >
                <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="+38(0__) ___ ____"
                    required
                    title="Please enter a valid phone number in the format: +38(0__) ___ ____"
                    sx={TextFieldStyle}
                />
            </InputMask>
            <TextField 
                className="email"
                label="Email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required
                inputProps={{ pattern: ".+@.+" }}
                title="Email must contain '@'."
                sx={TextFieldStyle}
            />
            <TextField 
                className="placeOfIssue"
                label="Place of Issue"   
                name="placeOfIssue" 
                value={form.placeOfIssue} 
                onChange={handleChange} 
                placeholder="Place of Issue" 
                required
                inputProps={{ pattern: "^[A-Z][a-z]*$" }}
                sx={TextFieldStyle}
            />
            <TextField 
                type="date" 
                label="Start Rent Date"
                id="outlined-password-input"
                className="startRentDate" 
                name="startRentDate" 
                value={form.startRentDate.format('YYYY-MM-DD')} 
                onChange={handleStartRentDateChange} 
                inputProps={{ min: new Date().toISOString().split('T')[0] }}
                required
                sx={TextFieldStyle}
            />
            <TextField 
                type="date" 
                label="Finish Rent Date"
                className="finishRentDate" 
                name="finishRentDate" 
                value={form.finishRentDate.format('YYYY-MM-DD')} 
                onChange={handleDateChange('finishRentDate')}
                required 
                inputProps={{ min: startRentDate }}
                sx={TextFieldStyle}
            />
            <TextField
                className="comments"
                label="Comments"
                name="comments" 
                value={form.comments} 
                onChange={handleChange} 
                placeholder="Comments" 
                sx={TextFieldStyle}
            />
            <Box 
                className="buttons"
                sx={{
                    width: '100%',
                }}
            >
                <Button 
                    className="submit" 
                    type="submit"
                    sx={SubmitButtonStyle}
                >
                    Submit
                </Button>
                <Button 
                    className="reset" 
                    onClick={handleReset} 
                    type="reset"
                    sx={ResetButtonStyle}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    );
};

export default RentCarForm;