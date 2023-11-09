import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./SessionDetails.module.css";

const SessionDetails = () => {
  const { id: sessionId } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(
      `https://explore-api-explore.tap01.cl01.lespaulstudioplus.info/api/summarize?sessionId=${sessionId}&sequence=1`
    );

    eventSource.onmessage = function (event) {
      setData((oldData) => oldData + event.data);
    };

    eventSource.onerror = function (error) {
      console.error("Error fetching data: ", error);
    };

    return () => {
      eventSource.close();
    };
  }, [sessionId]);

  return (
    <div className={`${styles.sessionDetails} ${styles.container}`}>
      <Link to="/" className={styles.backButton}>
        戻る
      </Link>{" "}
      {/* 戻るボタンを追加 */}
      {/* <img className={styles.groupIcon} alt="" src="/groupD.svg" />
      <img className={styles.groupIcon1} alt="" src="/groupD1.svg" /> */}
      <h2 className={styles.scrollableText}>{data}</h2>
    </div>
  );
};

export default SessionDetails;
