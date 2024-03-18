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
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <Form />
    </div>
  );
}

export default App;
