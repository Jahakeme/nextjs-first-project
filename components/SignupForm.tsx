'use client'

import { useState } from 'react';
import styles from '@/app/styles/Signup.module.css';

interface Form {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}

export default function SignupForm() {
  const [form, setForm] = useState<Form>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value });
  };

  function handleSubmit(e: FormData) {
    const form = Object.fromEntries(e);
    console.log(form);
  };

  return (
    <>
      <form className={styles.form} action={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
