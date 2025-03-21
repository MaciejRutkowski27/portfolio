import {React, useState, useEffect, useRef} from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: undefined, y: undefined });
  const maxRadius = 40;

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circleArray = [];
    for (let i = 0; i < 300; i++) {
      let r = Math.floor(Math.random() * 5) + 25;
      let x = Math.random() * (window.innerWidth - r * 2) + r;
      let y = Math.random() * (window.innerHeight - r * 2) + r;
      let dx = (Math.random() - 0.5) * 5;
      let dy = (Math.random() - 0.5) * 5;
      circleArray.push(new Circle(x, y, dx, dy, r));
    }

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "brown";
        c.fill();
        c.stroke();
      };

      this.update = function () {
        this.draw();
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y -= this.dy;

        // Interactivity with mouse
        if (
          mouse.x - this.x < 100 &&
          mouse.x - this.x > -100 &&
          mouse.y - this.y < 100 &&
          mouse.y - this.y > -100 &&
          this.radius < maxRadius
        ) {
          this.radius += 1;
        } else if (this.radius > 10) {
          this.radius -= 1;
        }
      };
    }

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      circleArray.forEach(circle => circle.update());
    };

    animate();

    const handleMouseMove = (event) => {
      setMouse({ x: event.x, y: event.y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse]);

  return <canvas ref={canvasRef} />;
};
export default Background;