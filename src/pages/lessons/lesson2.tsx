import styles from "../page.module.css";
import LinkToTop from "@/components/linkToTop";

export default function Lesson2() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <div>次の課題は少しレベルアップ</div>
      </div>
      <LinkToTop />
    </main>
  );
}
