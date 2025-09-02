import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Component = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Component />, rootElement);
