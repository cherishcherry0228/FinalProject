// // import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const movePage = useNavigate();

  function drive(){
     movePage('/user/dr');
   }
  return (
    
    <div className="home">
      <br /> 
      - 얼굴이 가운데 오도록 화면을 조정해주세요
      <br /> 
      - 화면에 나오는 얼굴 중 인식할 얼굴이 제일 커야해요
      <br /> 
      - 소리를 키워주세요
      <br /> 
      <button onClick={drive}>운전시작</button>
      </div>
  );
}