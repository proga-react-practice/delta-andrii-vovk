import React, { useState } from 'react';
import styles from './App.module.css';
import RentCarForm from './components/RentCarForm';
import FormResults from './components/FormResult';
import { RentCar, initialFormState } from './interfaces';

function App() {
  const [form, setForm] = useState<RentCar>(initialFormState);
  const [submittedForms, setSubmittedForms] = useState<RentCar[]>([]);

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

  return (
    <div className={styles.App}>
      <div className={styles.rent}>
        <RentCarForm form={form} setForm={setForm} onSubmit={handleSubmit} />
      </div>
      <div className={styles.result}>
        {submittedForms.map((form, index) => (
          <FormResults key={index} form={form} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;