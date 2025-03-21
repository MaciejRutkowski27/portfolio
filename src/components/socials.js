import React from "react";

export default function Socials() {
    return (
      <>
        <section id="socials">
          <div className="container">
            <div className="circle">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="500px"
                height="500px"
                viewBox="0 0 400 400"
                xmlSpace="preserve"
              >
                {/* Define Circular Paths */}
                <defs>
                  <path
                    id="circlePathSmall"
                    d="M 200, 200 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                  <path
                    id="circlePathMedium"
                    d="M 200, 200 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0"
                  />
                  <path
                    id="circlePathLarge"
                    d="M 200, 200 m -175, 0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0"
                  />
                </defs>

                {/* Small Circle (Fast Rotation) */}
                <g className="rotate-small">
                  <text fill="#00eaff">
                    <textPath href="#circlePathSmall">
                      FACEBOOK - fb/maciek.rutkowski.18
                    </textPath>
                  </text>
                </g>

                {/* Medium Circle (Slower, Counterclockwise) */}
                <g className="rotate-medium">
                  <text fill="#ff007f">
                    <textPath href="#circlePathMedium">
                      LINKEDIN - in/maciejrutkowski27/
                    </textPath>
                  </text>
                </g>

                {/* Large Circle (Slowest Rotation) */}
                <g className="rotate-large">
                  <text fill="#00ff7f">
                    <textPath href="#circlePathLarge">
                      GITHUB - MaciejRutkowski27
                    </textPath>
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </section>
      </>
    );
}