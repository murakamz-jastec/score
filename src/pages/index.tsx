import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const Index = () => {
  return (
    <main className={styles.main}>
      <Image
        src="/top_image.jpg"
        alt="Image"
        width={1920 / 3}
        height={855 / 3}
      />
      <div className={styles.title}>
        <div>Make your dreams come true from here</div>
      </div>
      <ul>
        <div className={styles.menuList}>
          <Link href="./lessons/lesson1">Lesson1</Link>
        </div>
        <div className={styles.menuList}>
          <Link href="./lessons/lesson2">Lesson1</Link>
        </div>
        <div className={styles.menuList}>
          <Link href="./lessons/lesson3">Lesson3</Link>
        </div>
      </ul>
    </main>
  );
};
export default Index;
