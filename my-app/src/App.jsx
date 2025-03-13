import './App.css'
import Card from './components/Card';
import Title from './components/Title';
import NavBar from './components/Navbar';
import duckGirlImage from './assets/duck_girl.png';
import MusicPlayer from './components/MusicPlayer';

function App() {

  return (
    <>
      <NavBar />

      <div className="section" id="hero">
        <div className="heroLeft">
          <Title text="HELLO." />
          <h2>My name is <span className="italic-text">Yuhan Wang</span></h2>
          <p>3rd Year Computer Science and Economics (adv) student at the University of Adelaide — 2026 graduate</p>
          <MusicPlayer />
        </div>
        <div className="heroRight">
          <img src={duckGirlImage} alt="alt picture"></img>
        </div>
      </div>

      <div className="section" id="am">
        <div className="am-left">
          <div className="playlist">lkasjdlasjdlksadjslkasjdlasjdlksadjslkasjdlasjdlksadjslkasjdlasjdlksadjslkasjdlasjdlksadjs</div>
          <div className="bookshelf"></div>
        </div>
        <div className="am-right">
          <p>Hi, my name is Yuhan Wang and I’m currently a third year Computer Science and Economics (advanced) student at the University of Adelaide. I’ve always loved the creative aspect of coding and being about to develop anything that comes to mind, and the problem solving that comes with it has lead to choose the degree that I did</p>
          <p>I hope you enjoy my portfolio website! I’m currently seeking a job in software development, web development, or data analysis.</p>
          <Title text="ABOUT ME" />
        </div>
      </div>

      <div className="section" id="projects">
        <Title text="PROJECTS" />
        <Card title="Project 1" description="blah blah blay" image="../assets/react.svg" />
        <Card title="Project 2" description="blah blah blay" image="../assets/react.svg" />
      </div>
    </>
  )
}

export default App
