import "./App.css";
import Menu from "./components/menu";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./components/footer";

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
            <Contact />
            <Footer/>
          </div>
        </span>
      </div>
    </>
  );
}

export default Home;
