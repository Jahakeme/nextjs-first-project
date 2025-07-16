'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from '@/app/styles/Userdetail.module.css';

type User = {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
  };
};

export default function UserDetail() {
  const params = useParams();
  const id  = params?.id;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, [id]);

  return (
    <>
      <div className={styles.userDetail}>
        {user ? (
          <>
            <h1>{user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
