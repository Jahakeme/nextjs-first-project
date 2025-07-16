'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Users.module.css';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <div className={styles.users}>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p><strong>{user.name}</strong> ({user.email})</p>
              <Link href={`/users/${user.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
