import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

import Form from './components/Form';

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    initializeLIFF();
  }, []);

  const initializeLIFF = () => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID // ローカルではこっち
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((error) => {
        setMessage("LIFF init failed.");
        setError(`${error}`);
        alert(error);
      });
  };

  return (
    <div className="App">
      <h1>こちらの条件で検索</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
      <Form initializeLIFF={initializeLIFF} />
    </div>
  );
}

export default App;
