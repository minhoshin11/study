import { useState } from "react";
import { Context1 } from "./Pages/context";
import "./App.css";
import Center from "./Pages/center";
import Footer from "./Pages/footer";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [cont, setCont] = useState(1);

  return (
    <>
      <div className={isDark ? "App" : "whiteMode"}>
        <Context1.Provider value={{ cont, setCont }}>
          <div>
            <div>하이</div>
            <Center />
            <Footer />
            <button
              onClick={() => {
                setIsDark(!isDark);
              }}
            >
              다크모드
            </button>
          </div>
        </Context1.Provider>
      </div>
    </>
  );
}

export default App;
