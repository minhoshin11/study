import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Ani from "./pages/ani";
import Cdn from "./pages/cdn";
import Flex from "./pages/flex";
import Grid from "./pages/grid";

function App() {
  //테일윈드는 실습할 때 마다 찾아와서 사용하는 게 좋음.
  //색깔별로 우선순위가 있다.
  const navigate = useNavigate();
  return (
    <>
      <div className="w-11 h-6 flex flex-row gap-2 mb-9">
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11 p-1 w-20"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11 p-1 w-20"
          onClick={() => {
            navigate("/flex");
          }}
        >
          flex
        </button>
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11 p-1 w-20"
          onClick={() => {
            navigate("/grid");
          }}
        >
          Grid
        </button>
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11  w-20"
          onClick={() => {
            navigate("/ani");
          }}
        >
          Animation
        </button>
        <button
          className="border-4 border-blue-300 text-white bg-slate-700 size-11  w-20"
          onClick={() => {
            navigate("/cdn");
          }}
        >
          CDN
        </button>
      </div>
      <Routes>
        <Route path="/flex" element={<Flex />}></Route>
        <Route path="/grid" element={<Grid />}></Route>
        <Route path="ani" element={<Ani />}></Route>
        <Route path="cdn" element={<Cdn />}></Route>
      </Routes>
    </>
  );
}

export default App;
