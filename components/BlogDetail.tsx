'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Blogdetail.module.css';

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;
  const [blog, setBlog] = useState<{ title: string; body: string } | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data));
    }
  }, [id]);

  return (
    <>
      <div className={styles.blogDetail}>
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <Link href='/blogs'>Return to Blogs</Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
