import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const resetForm = () => {
    setFormState(inputs);
  };
  return { formState, formError, resetForm, handleFormChange, setFormError };
}
