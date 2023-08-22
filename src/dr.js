// import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./dr.css"; // 별도의 CSS 파일을 import하여 스타일링을 적용

export default function Dr() {
  const movePage = useNavigate();

  function arrive() {
    movePage('/user/home');
  }

  return (
    <div className="mypage">
      {/* 인식할 코드 */}
      <button className="start-button" onClick={arrive}>
        도착
      </button>
    </div>
  );
}

