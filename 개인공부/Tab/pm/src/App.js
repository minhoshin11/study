import './App.css';
import Banner from "./components/banners/banner";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
//임폴트 라우트 라우츠 


function App() {
  return (
  <div className="App">
    <div className="container">
        <Banner/>
        <Main/>
        <Footer/>
    </div>

{/* 머 어디 접소갛면 {/detail} 
    {"/"}
    
*/}
  </div>
)}


export default App;