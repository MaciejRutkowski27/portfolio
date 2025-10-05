import myimage from "./myimage.jpeg"
export default function Aboutme() {

return (
  <>
    <div className="aboutme" id="aboutme">
      <div className="about-container">
        <div className="picandtext">
          <img src={myimage} alt="me" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="heading1">Hej, I'm Maciej.</h1>
            <p className="aboutme-text">
              I love video games, football, Formula1, learning languages and
              traveling the world. You can see the countries I've been to on the
              globe.
              <br></br>
              Coding is my passion. I like to tackle bugs and errors in code,
              one can of Red Bull at a time. Add some UX/UI to the mix and
              here's my portfolio. While ideally I'd like to focus on frontend
              development, I don't mind doing some more design oriented work
              either.
            </p>
            <br></br>
            <p className="aboutme-textbold">
              I'm currently looking for a{" "}
              <mark
                style={{
                  color: "#ed2ea5",
                  width: "fit-content",
                  background: "none",
                }}
              >
                position in Frontend Development.{" "}
              </mark>{" "}
              
              
            </p>
          </div>
        </div>
        <div className="earth"></div>
      </div>
    </div>
  </>
);
}