'use client'

// export default function Signup (){
//     function register(formData: Iterable<readonly [PropertyKey, unknown]>){
//         const data = Object.fromEntries(formData)
//         console.log(data)    
//     }

//     return (
//         <form action={register} className="signup">
//             <label> Username  
//                 <input type="input" placeholder="JohnDoe"/>
//             </label>
//             <label> Email  
//                 <input type="input" placeholder="johndoe@gmail.com"/>
//             </label>
//             <label> Password  
//                 <input type="password"/>
//             </label>
//             <label> Confirm Password  
//                 <input type="password"/>
//             </label>
//             <button>
//                 Submit
//             </button>
//         </form>
//     )
// }
import { useState } from 'react';
import styles from '@/app/styles/Signup.module.css';
import Navbar from '../navbar/page'

export default function SignUp () {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Navbar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
