import React, { useState } from "react";
import liff from "@line/liff";
import "./Form.css"; // CSSファイルをインポート

export default function Form() {
  const [formData, setFormData] = useState({
    date: "",
    place: "",
    budget: "",
    freeword: ""
  });
  
  // フォームの入力が変更されたときに呼び出されるイベントハンドラー関数
  const handleChange = (event) => {
    // 変更されたフォーム名:変更後の値
    const { name, value } = event.target;
    
    // formDataの更新
    setFormData(prevState => ({
      ...prevState,
      [name]: value // 変更されたとこだけ指定して書き換え
    }));
  };

  // フォームの送信時に呼び出される関数
  const handleSubmit = (event) => {
    event.preventDefault();
    // フォームの送信処理を実装する
    // 例: 入力された値をサーバーに送信する
    const { date, place, budget, freeword } = formData;
    const message =
      `/${date}\n` + 
      `+${place}\n` +
      `¥${budget}\n` +
      `=${freeword}`;
    
    liff.sendMessages([
      {
        type: 'text',
        text: message
      }
    ]);
    console.log(formData);
    liff.closeWindow();
  };

  return (
    <div className="forms-container">
      <form onSubmit={handleSubmit}>

        <div className="form-container">
          <label htmlFor="date">日付:</label>
          <input 
            type="date"
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
          />
        </div>
        
        <div className="form-container">
          <label htmlFor="place">場所:</label>
          <input 
            type="text" 
            id="place" 
            name="place" 
            value={formData.place} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-container">
          <label htmlFor="budget">予算:</label>
          <input 
            type="text" 
            id="budget" 
            name="budget" 
            value={formData.budget} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-container">
          <label htmlFor="freeword">フリーワード:</label>
          <input 
            type="text" 
            id="freeword" 
            name="freeword" 
            value={formData.freeword} 
            onChange={handleChange} 
          />
        </div>

        <button onSubmit={handleSubmit}>送信</button>
      </form>
    </div>
  );
}
