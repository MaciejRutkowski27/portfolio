import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Update cursor position
  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  // Detect hover over specific div (e.g., ".hover-area")
  useEffect(() => {
    const hoverElement = document.querySelector(".hover-area");

    if (hoverElement) {
      hoverElement.addEventListener("mouseenter", () => setIsHovering(true));
      hoverElement.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (hoverElement) {
        hoverElement.removeEventListener("mouseenter", () =>
          setIsHovering(true)
        );
        hoverElement.removeEventListener("mouseleave", () =>
          setIsHovering(false)
        );
      }
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? "large" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isHovering ? 1 : 0, // Hide cursor when not hovering
      }}
    />
  );
};

export default CustomCursor;
