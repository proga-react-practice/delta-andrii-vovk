import React, { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import InputMask from 'react-input-mask';
import { RentCar, initialFormState } from '../interfaces';
import { TextField, Button, Box, useTheme } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { styled } from '@mui/system';

interface RentCarFormProps {
    form: RentCar;
    setForm: React.Dispatch<React.SetStateAction<RentCar>>;
    onSubmit: (e: React.FormEvent) => void;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    borderColor: theme.palette.primary.main,
    marginBottom: '10px',
    fontSize: '16px',
    color: theme.palette.primary.dark,
    boxSizing: 'border-box',
    '&.Mui-error': {
        borderColor: theme.palette.error.main,
    },
}));

const RentCarForm: React.FC<RentCarFormProps> = ({ form, setForm, onSubmit}) => {

    const theme = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleDateChange = (name: string) => (date: Dayjs | null) => {
        if (date) {
            setForm(prevForm => ({ ...prevForm, [name]: date }));
        }
    };

    const handleReset = () => {
        setForm(initialFormState);
    };

    const handleStartRentDateChange = (date: Dayjs | null) => {
        if (date) {
            setForm(prevForm => ({ ...prevForm, startRentDate: date }));
        }
    };

    const [fieldErrors, setFieldErrors] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        placeOfIssue: false,
    });
    
    const handleFieldChange = (name: string, pattern: RegExp) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFieldErrors({
            ...fieldErrors,
            [name]: !value.match(pattern),
        });
        handleChange(e);
    }; 

    const FormStyle = {
        minWidth: '250px',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '70px',
        backgroundColor: theme.palette.background.default,
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.20)',
    }

    const FullNameStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    }
    
    const DateAndTimeStyle = {
        width: '100%', 
        padding: '10px',
        marginBottom: '10px',
        boxSizing: 'border-box',
    }

    const BoxStyle = {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-around'
    }

    const SubmitButtonStyle = {
        width: '44%',
        padding: '5px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '5px',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.info.light,
        marginRight: '10%', 
        '&:hover': {
            backgroundColor: theme.palette.info.dark,
        },
    }

    const ResetButtonStyle = {
        width: '44%',
        padding: '5px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '5px',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.error.light,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
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
                <StyledTextField 
                    error={fieldErrors.firstName}
                    className="firstName" 
                    label="First Name"
                    name="firstName" 
                    value={form.firstName} 
                    onChange={handleFieldChange('firstName', /^[A-Z][a-z]*$/)} 
                    placeholder="First Name" 
                    required
                    inputProps = {{ pattern: "^[A-Z][a-z]*$" }}
                    title="First name must start with a capital letter and contain only letters."
                />
                <StyledTextField 
                    error={fieldErrors.lastName}
                    className="lastName" 
                    label="Last Name"
                    name="lastName" 
                    value={form.lastName} 
                    onChange={handleFieldChange('lastName', /^[A-Z][a-z]*$/)} 
                    placeholder="Last Name" 
                    required
                    inputProps = {{ pattern: "^[A-Z][a-z]*$" }}
                    title="Last name must start with a capital letter and contain only letters."
                />
            </Box>
            <InputMask
                mask="+38(099) 999 9999"
                value={form.phoneNumber}
                onChange={handleChange}
            >
                <StyledTextField
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="+38(0__) ___ ____"
                    required
                    title="Please enter a valid phone number in the format: +38(0__) ___ ____"
                />
            </InputMask>
            <StyledTextField 
                error={fieldErrors.email}
                className="email"
                label="Email" 
                name="email" 
                value={form.email} 
                onChange={handleFieldChange('email', /.+@.+/)}  
                placeholder="Email" 
                required
                inputProps={{ pattern: ".+@.+" }}
                title="Email must contain '@'."
            />
            <StyledTextField 
                error={fieldErrors.placeOfIssue}
                className="placeOfIssue"
                label="Place of Issue"   
                name="placeOfIssue" 
                value={form.placeOfIssue} 
                onChange={handleFieldChange('placeOfIssue', /^[A-Z][a-z]*$/)}  
                placeholder="Place of Issue" 
                required
                inputProps={{ pattern: "^[A-Z][a-z]*$" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Start Rent Date"
                    name="startRentDate"
                    value={form.startRentDate}
                    onChange={handleStartRentDateChange}
                    format="YYYY-MM-DD hh:mm A"
                    minDateTime={dayjs().subtract(1, 'minutes')}
                    sx={DateAndTimeStyle}
                />

                <DateTimePicker
                    label="Finish Rent Date"
                    name="finishRentDate"
                    value={form.finishRentDate}
                    onChange={handleDateChange('finishRentDate')}
                    format="YYYY-MM-DD hh:mm A"
                    minDateTime={form.startRentDate ? dayjs(form.startRentDate) : dayjs()}
                    sx={DateAndTimeStyle}
                />
            </LocalizationProvider>
            <StyledTextField
                className="comments"
                label="Comments"
                name="comments" 
                value={form.comments} 
                onChange={handleChange} 
                placeholder="Comments" 
            />
            <Box 
                className="buttons"
                sx={BoxStyle}
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