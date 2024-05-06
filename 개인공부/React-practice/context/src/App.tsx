import { createContext, useState } from "react";
import "./App.css";
// import { DarkContext } from "./Context";
import Gray from "./Gray";

function App() {
  const DarkContext = createContext(null);
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? "" : "DarkMode"}>
        <div>ㅎㅇ</div>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          다크모드
        </button>
        <Gray />
      </div>
    </DarkContext.Provider>
  );
}

export default App;
