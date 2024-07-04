import "./App.css";

function App() {
  //테일윈드는 실습할 때 마다 찾아와서 사용하는 게 좋음.
  //색깔별로 우선순위가 있다.
  return (
    <>
      <div className="space-y-8 bg-red-900">
        {/* <div className="w-96 h-10 bg-white shadow rounded">w-96</div>
        <div className="w-80 bg-white shadow rounded">w-80</div>
        <div className="w-72 bg-white shadow rounded">w-72</div>
        <div className="w-64 bg-white shadow rounded">w-64</div>
        <div className="w-60 bg-white shadow rounded">w-60</div>
        <div className="w-56 bg-white shadow rounded">w-56</div>
        <div className="w-52 bg-white shadow rounded">w-52</div>
        <div className="w-48 bg-white shadow rounded">w-48</div> */}
        <div className="text-gray-200">hello world</div>
        <div className="text-gray-300">hello </div>
        <div className="text-gray-500">world</div>
        <div className="text-2xl p-3"></div>
      </div>
      <div className="w-20 h-20 rounded-full bg-red-500"></div>
      <div className="mt-4 text-sm">2xl m-4</div>
      <div className="bg-slate-600"></div>
    </>
  );
}

export default App;
