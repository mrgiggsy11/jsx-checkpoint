import man from './man.svg';
import './style.css';


function App() {
  return (
    <div className="app">
      <div style={{border:"1px solid black",maxWidth:"100vw"}}>
          <h1 className="title red">Ahmed</h1>
          <br/>
          <img src="imageInPublic.png" width= "320" height="240" alt="" />
          <br/>
          <img src={man} width= "320" height="240" alt=""/>
      </div>
      <video width= "320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
