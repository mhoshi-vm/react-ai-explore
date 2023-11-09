import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Start.module.css";

function Start() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
      <div className={styles.right}>
        <div className={styles.buttonContainer}>
          <textarea
            ref={textAreaRef}
            className={styles.textBlock}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className={styles.startSearching}
            onClick={() =>
              navigate(`/search?query=${encodeURIComponent(text)}`)
            }
          >
            これで検索する
          </button>
        </div>
        <div className={`${styles.group1} ${styles.centeredGroup1}`}>
          <div className={styles.aiSearchOn}>
            AI Search on VMware Explore US
            <br />
            Keynote & Technical Sessions
          </div>
        </div>
        <div className={`${styles.group} ${styles.centeredGroup2}`}>
          <div className={styles.tanzuGreenplumWithPgvector}>
            Question Answering with
            <br />
            VMware’s pgVector/Greenplum
          </div>
        </div>{" "}
        <img className={styles.groupIcon1} alt="" src="/PrivateAIBrain.svg" />
      </div>
    </div>
  );
}
export default Start;
