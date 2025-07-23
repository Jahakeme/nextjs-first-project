import styles from '@/app/styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/">
            <div className={styles.logo}>MyBlog</div>
          </Link>
          
          {/* Navigation Links */}
          <ul className={styles.navList}>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/signup">Signup</Link></li>
          </ul>
      </nav>
    </>
  );
}
