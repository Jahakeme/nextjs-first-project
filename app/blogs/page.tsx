'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blogs.module.css';

type Blog = {
  id: number;
  title: string;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <>
      <div className={styles.blogs}>
        <h1>All Blogs</h1>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
