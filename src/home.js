import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // 별도의 CSS 파일을 import하여 스타일링을 적용

export default function Home() {
  const movePage = useNavigate();

  function drive() {
    movePage("/user/dr");
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <p className="instruction">
          오늘도 안전운행<br/> 졸음운전 잠시 쉬었다가요<br/>
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1464/1464630.png"
          alt="운전 아이콘"
          className="drive-icon"
        />
        <p>
          얼굴이 가운데 오도록  <br/>화면을 조정해주세요<br />
          <br />
          소리를 키워주세요
        </p>
        <button className="start-button" onClick={drive}>
          운전 시작
        </button>
      </div>
    </div>
  );
}
