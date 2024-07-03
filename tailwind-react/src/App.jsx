import "./App.css";

function App() {
  //테일윈드는 실습할 때 마다 찾아와서 사용하는 게 좋음.
  //색깔별로 우선순위가 있다.
  return (
    <>
      <div className="space-y-8 bg-red-200">
        <div className="w-96 h-10 bg-white shadow rounded">w-96</div>
        <div className="w-80 bg-white shadow rounded">w-80</div>
        <div className="w-72 bg-white shadow rounded">w-72</div>
        <div className="w-64 bg-white shadow rounded">w-64</div>
        <div className="w-60 bg-white shadow rounded">w-60</div>
        <div className="w-56 bg-white shadow rounded">w-56</div>
        <div className="w-52 bg-white shadow rounded">w-52</div>
        <div className="w-48 bg-white shadow rounded">w-48</div>
      </div>
    </>
  );
}

export default App;
