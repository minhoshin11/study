import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Flex from "./pages/flex";

function App() {
  //테일윈드는 실습할 때 마다 찾아와서 사용하는 게 좋음.
  //색깔별로 우선순위가 있다.
  const navigate = useNavigate();
  return (
    <>
      <div className="w-11 h-6 flex flex-row gap-2 mb-9">
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11 pr-3 w-20"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11 pr-3 w-20"
          onClick={() => {
            navigate("/flex");
          }}
        >
          flex
        </button>
      </div>
      <Routes>
        <Route path="/flex" element={<Flex />}></Route>
      </Routes>
    </>
  );
}

export default App;
