import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Alert from "./components/Alert";
import ServiceItem from "./components/serviceitem";

function App() {
  const [theme, setTheme] = useState("light");
  const [text, setButtonText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);

  const alertShow = (type, message) => {
    setAlert({ type: type, message: message });

    setTimeout(() => {
      setAlert(null);
    }, 300);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setButtonText("Enable Light");
      alertShow("success", "light mode has been enabled");
    } else {
      setTheme("light");
      setButtonText("Enable dark");
      alertShow("success", "Dark mode has been enabled");
    }
  };

  return (
    <>
      <div>
        <header>
          <Navbar theme={theme} text={text} toggleTheme={toggleTheme} />
        </header>
        <Alert alert={alert} />
        <ServiceItem />
      </div>
    </>
  );
}

export default App;
