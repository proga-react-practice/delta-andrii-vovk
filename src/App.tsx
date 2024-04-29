import React, { useState } from 'react';
import RentCarForm from './components/RentCarForm';
import { FormResults, FormResultsMobile} from './components/FormResult';
import { RentCar, initialFormState } from './interfaces';
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import theme from './theme';
import Box from '@mui/material/Box';

function App() {
  const [form, setForm] = useState<RentCar>(initialFormState);
  const [submittedForms, setSubmittedForms] = useState<RentCar[]>([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    flexDirection: {xs: 'column', md: 'row'},
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