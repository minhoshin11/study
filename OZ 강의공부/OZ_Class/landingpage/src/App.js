import './App.css';
import cloud from './img/cloud.mp4';

function App() {
  return (
    <div className="App">
      <div className="Video-Background">
          <video autoPlay loop muted controls={false} >
            <source className='cloud' src={cloud} type="video/mp4"/>
          </video>
      </div>
      <div className='contents'>
        <h2>Cloud</h2>
      </div>
    </div>
  );
}

export default App;
