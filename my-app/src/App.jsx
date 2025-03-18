import './App.css'
import Card from './components/Card';
import Title from './components/Title';
import NavBar from './components/Navbar';
import duckGirlImage from './assets/duck_girl.png';
import MusicPlayer from './components/MusicPlayer';
import Playlist from './components/Playlist';
import BookshelfCarousel from './components/BookshelfCarousel';
import LanguageList from './components/LanguageList';
import LinksList from './components/Linkslist';
import moonwater from './assets/projects/moonwater gully.png';
import volunteer from './assets/projects/volunteerweb.png';

function App() {
  const descMoon = (
    <>
      <p><strong>Languages/Libraries:</strong> C++, utilising SFML library</p>
      <p>Development with two other teammates using OOP principles.</p>
      <p>Allows user to play in a 2D world to plant, farm, buy, and sell with a seamless and easy-to-navigate UI.</p>
      <p>Developed an efficient encrypted saving mechanism.</p>
    </>
  );

  const descVolun = (
    <>
      <p><strong>Language/Systems:</strong> Javascript, Vue.Js, Express, CSS/HTML, MySQL</p>
      <p>Full stack development of interactive website including Google log ins OAuth and Leaflet API</p>
    </>
  )


  return (
    <>
      <NavBar />
      <div className="section" id="hero">
        <div className="heroLeft">
          <Title text="HELLO." textAlign="left" />
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
          <div className="bookshelf">
            <h3>my favourite reads</h3>
            <BookshelfCarousel />
          </div>
          <div className="playlist">
            <h3>currently listening</h3>
            <Playlist />
          </div>
        </div>
        <div className="am-right">
          <div><p>Hi, my name is Yuhan Wang and I’m currently a third year Computer Science and Economics (advanced) student at the University of Adelaide. I’ve always loved the creative aspect of coding and being about to develop anything that comes to mind, and the problem solving that comes with it has lead to choose the degree that I did</p>
            <p>I hope you enjoy my portfolio website! I’m currently seeking a job in software development, web development, or data analysis.</p></div>

          <div className="languages">
            <LanguageList />
          </div>
          <Title text="ABOUT ME" textAlign="right" classname="am-title" />
        </div>

      </div>

      <div className="section" id="projects">
        <Title text="PROJECTS" />
        <Card title="Moonwater Gully" description={descMoon} image={moonwater} />
        <Card title="Volunteer Website" description={descVolun} image={volunteer} />
      </div>
      <div className="section" id="contacts">
        <div className="contacts-top"><LinksList /></div>
        <div className="contacts-bottom"><Title text="CONTACTS" textAlign='left' /></div>
      </div>
    </>
  )
}

export default App
