import React from "react";
import styles from "./SearchSessionResults.module.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchSessionResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = new URLSearchParams(location.search).get("query");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();
    axios
      .get(
        `https://explore-api-explore.tap01.cl01.lespaulstudioplus.info/api/search?prompt=${encodeURIComponent(
          query
        )}&limit=20`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    return () => {
      source.cancel();
    };
  }, [query]);

  return (
    <div className={styles.searchSessionResults}>
      <Link to="/" className={styles.backButton}>
        戻る
      </Link>
      {loading ? (
        <p>
          データを取得中です。しばらくお待ちください。先ほど入力して戴いたテキストエリアから自然言語のパラメータとして渡されたものを、Greenplum
          データベースにアクセスできるクエリに変換し、ベクターデータに対してセマンティック検索を行っているため、検索結果を得るまでに時間がかかります。
        </p>
      ) : (
        data &&
        data.map((session) => (
          <div key={session.id}>
            <p>ID: {session.id}</p>
            <p>Session ID: {session.sessionId}</p>
            <p>Title: {session.title}</p>
            <Link to={`/session/${session.sessionId}`}>もっと詳しく</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchSessionResults;
