import styles from "../page.module.css";
import LinkToTop from "@/components/linkToTop";
import React, { useEffect, useState } from "react";
// ボタンの状態を表す
let state = 0;
// ボタンの表示名
let buttonName = "チーム表示";
const Lesson1 = () => {
  //チームAの得点
  const Ascores = ["1", "0", "1", "0", "0", "0", "0", "2", "0"];
  //チームBの得点
  const Bscores = ["0", "0", "0", "1", "0", "3", "0", "2", "0"];
  //イニング数
  const ining = Array.from({ length: Ascores.length }, (_, index) => index + 1);
  useEffect(() => {
    state = 0;
    buttonName = "チーム表示";
  }, []);
  // 表示、非表示の切替
  // チーム名
  const [TeamshowDetails, TeamsetShowDetails] = useState(false);
  // 試合結果
  const [ScoreshowDetails, ScoresetShowDetails] = useState(false);
  // 結果ボタンが押されたら
  const onButtonClick = () => {
    // １回目ならチーム名表示
    if (state == 0) {
      state = 1;
      buttonName = "結果表示";
      TeamButtonClick();
      console.log("チーム表示");
    } //２回目なら結果を表示
    else if (state == 1) {
      state = 2;
      buttonName = "非表示";
      ScoreButtonClick();
      console.log("結果表示");
    } //３回目なら非表示
    else {
      state = 0;
      buttonName = "チーム表示";
      TeamButtonClick();
      ScoreButtonClick();
      console.log("非表示");
    }
  };
  //チーム名表示、非表示の切替
  const TeamButtonClick = () => {
    TeamsetShowDetails(!TeamshowDetails);
  };
  //結果表示、非表示の切替
  const ScoreButtonClick = () => {
    ScoresetShowDetails(!ScoreshowDetails);
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <div>最初の課題</div>
        {/* Hire comes your codes */}
      </div>
      <button onClick={onButtonClick}>{buttonName}</button>

      <table className={styles.score}>
        <thead>
          <th>チーム名</th>
          {ining.map((ining, index) => (
            <th key={index}>{ining}</th>
          ))}
          <th>計</th>
        </thead>

        <tbody>
          <td>{TeamshowDetails && "チームA"}</td>
          {Ascores.map((Ascore, index) => (
            <td key={index}>{ScoreshowDetails && Ascore}</td>
          ))}
          <td>{ScoreshowDetails && "4"}</td>
        </tbody>
        <tbody>
          <td>{TeamshowDetails && "チームB"}</td>
          {Bscores.map((Bscore, index) => (
            <td key={index}>{ScoreshowDetails && Bscore}</td>
          ))}
          <td>{ScoreshowDetails && "6"}</td>
        </tbody>
      </table>

      <LinkToTop />
    </main>
  );
};
export default Lesson1;
