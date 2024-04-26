import React, { useState, useEffect } from 'react';
import RentCarForm from './components/RentCarForm';
import { FormResults, FormResultsMobile} from './components/FormResult';
import { RentCar, initialFormState } from './interfaces';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Box from '@mui/material/Box';

function App() {
  const [form, setForm] = useState<RentCar>(initialFormState);
  const [submittedForms, setSubmittedForms] = useState<RentCar[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1420);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1420);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedForms([...submittedForms, form]);
    setForm(initialFormState);
  };

  const handleDelete = (index: number) => {
    const newSubmittedForms = [...submittedForms];
    newSubmittedForms.splice(index, 1);
    setSubmittedForms(newSubmittedForms);
  };

  const AppStyle = {
    display: 'flex',
    width: '1350px',
    flexDirection: 'row',
    '@media (max-width: 811px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 450px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 380px)': {
      flexDirection: 'column',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={ AppStyle }>
        <Box>
          <RentCarForm form={form} setForm={setForm} onSubmit={handleSubmit} />
        </Box>
        <Box>
          {submittedForms.map((form, index) => (
            isMobile ? 
            <FormResultsMobile key={index} form={form} onDelete={() => handleDelete(index)} /> :
            <FormResults key={index} form={form} onDelete={() => handleDelete(index)} />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;