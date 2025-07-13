import styles from "./page.module.css";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <h1>Welcome to a Simple Blog</h1>
      </section>
    </>
);
}
