import './App.css';
import Main from './components/Main';
import MdItem from './components/MdItem';
//순서 정하기
//1.홍보문구 , 2.상품명, 3.누르면 해당정보 알려주기..?
function App() {
  return (
    <div className="App">
      <Main/>
      <MdItem/>
    </div>
  );
}

export default App;
