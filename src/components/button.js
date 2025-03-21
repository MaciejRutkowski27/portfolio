export default function Button({ text, to }) {
  return (
    <>
      <div className="svg-container">
        <a href={to}>
          <button className="btn">
            <span className="btnspan">{text}</span>
            <svg width="120" height="60" viewBox="0 0 150 80">
              {/* Blur + glow effect */}
              <defs>
                <filter id="blurEffect">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                
              </filter>
              </defs>

              {/* Background shape with blur effect */}
              <rect
                x="0"
                y="0"
                width="150"
                height="80"
                className="svg-fill"
                filter="url(#blurEffect)"
              />

              <polyline
                points="0,4 3,1 60,1 62,3 88,3 90,1 147,1 150,4"
                style={{
                  fill: "none",
                  stroke: "#00eaff",
                  strokeWidth: "1.5",
                }}
              />
              <polyline
                points="3,2 0,5 0,60 2,64 2,70 0,72 0,78 3,79"
                style={{ fill: "none", stroke: "#00eaff", strokeWidth: "1" }}
              />
              <polyline
                points="147,2 150,5 150,12 148,14 148,45 150,48 150,78 147,79"
                style={{ fill: "none", stroke: "#00eaff", strokeWidth: "1" }}
              />
              <polyline
                points="0,76 3,79 40,79 42,77 108,77 110,79 147,79 150,76"
                style={{
                  fill: "none",
                  stroke: "#00eaff",
                  strokeWidth: "1.5",
                }}
              />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
}