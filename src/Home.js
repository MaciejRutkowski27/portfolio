import "./App.css";
import Menu from "./components/menu";
import Socials from "./components/socials";
import Aboutme from "./Aboutme";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <div className="App">
        <span>
          <div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <Menu />
            <Aboutme />
            <Projects/>
            <Socials />
          </div>
        </span>
      </div>
    </>
  );
}

export default Home;
