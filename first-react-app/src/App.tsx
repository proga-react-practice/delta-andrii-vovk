import React, { useState } from 'react';
import styles from './App.module.css';
import RentCarForm, { RentCar } from './components/RentCarForm';
import FormResults from './components/FormResult';
import dayjs from 'dayjs';

function App() {
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

  const [form, setForm] = useState<RentCar>(initialFormState);
  const [submittedForms, setSubmittedForms] = useState<RentCar[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedForms([...submittedForms, form]);
    setForm(initialFormState);
  };

  return (
    <div className={styles.App}>
      <div className={styles.rent}>
        <RentCarForm form={form} setForm={setForm} onSubmit={handleSubmit} />
      </div>
      <div className={styles.result}>
        {submittedForms.map((form, index) => (
          <FormResults key={index} form={form} />
        ))}
      </div>
    </div>
  );
}

export default App;