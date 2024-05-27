import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>Here comes your dreams</div>
      </div>
      <div className={styles.center}>
        <Link href="./aboutme">About Me</Link>
      </div>
    </main>
  );
}
