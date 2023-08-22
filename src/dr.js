// import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Dr() {
  const movePage = useNavigate();

  function arrive(){
     movePage('/user/home');
   }   
  return (

    <div className="mypage">
      {/* 인식할 코드 */}
      <button onClick={arrive}>도착</button>
      </div>
  );
}