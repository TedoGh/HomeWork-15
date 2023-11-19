import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowResize";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [dark, SetDark] = useLocalStorage("color", true);
  const color = dark ? "#000" : "#fff";
  const mobileScreenSize = 576;
  const size = useWindowResize();
  const handleClick = () => {
    SetDark((prevState) => !prevState);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [dark]);

  useEffect(() => {
    if (size.width < mobileScreenSize) {
      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.backgroundColor = color;
    }
  }, [size.width]);
  return (
    <div className="App">
      {size.width < mobileScreenSize ? (
        <h1>Mobile Screen</h1>
      ) : (
        <h1>Desktop Screen</h1>
      )}
      {size.width > mobileScreenSize && (
        <button onClick={handleClick}>Toggle Theme</button>
      )}
    </div>
  );
};

export default App;
