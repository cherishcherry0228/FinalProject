// import "./styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Dr from './dr';

export default function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/user/home"} element={<Home />}></Route>
              <Route path={"/user/dr"} element={<Dr />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}