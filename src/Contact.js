import "./App.css";
import WordFlick from "./components/hello";
export default function Contact() {
  return (
    <>
      <div className="App">
        <WordFlick />
        <span>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          {/* <div class="earth"></div> */}
          <img className="cv-image" src="/CV.png" alt="cv" />
        </span>
      </div>
    </>
  );
}
