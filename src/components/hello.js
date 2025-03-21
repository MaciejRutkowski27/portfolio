import React, { useEffect, useState, useRef } from "react";

const WordFlick = () => {
  const [words] = useState(["Hello World!"]);
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [skipDelay] = useState(15);
  const [speed] = useState(70);
  const wordRef = useRef(null);

  useEffect(() => {
    const wordflick = () => {
      setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            setSkipCount((prev) => {
              if (prev + 1 === skipDelay) {
                setForwards(false);
                return 0;
              }
              return prev + 1;
            });
          } else {
            setOffset((prev) => prev + 1);
          }
        } else {
          if (offset === 0) {
            setForwards(true);
            setI((prev) => (prev + 1) % words.length);
          } else {
            setOffset((prev) => prev - 1);
          }
        }

        if (wordRef.current) {
          wordRef.current.textContent = words[i].substr(0, offset);
        }
      }, speed);
    };

    

    return () => clearTimeout();
  }, [forwards, i, offset, skipCount, skipDelay, speed, words]);

  return <div ref={wordRef} className="word">Maciej Rutkowski</div>;
};

export default WordFlick;
