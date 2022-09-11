import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Heading } from "./components/heading";
import { PasswordWrapper } from "./components/passsword-wrapper";

function App() {
  const [password, setPassword] = useState("**********************");
  const [name, setName] = useState("Unknown");
  useEffect(() => {
    setTimeout(() => {
      let nm = prompt("Enter your name");
      if (nm) {
        setName(nm);
      }
    }, 1000);
  }, []);

  const notify = () =>
    toast("Password Generated and copied to clipboard", "success");
    
  const generatePassword = () => {
    let characters =
      "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#-";
    let charCount = 22;
    // Create a random password
    let randomPassword = "";
    for (let i = 0; i < charCount; i++) {
      randomPassword +=
        characters[Math.floor(Math.random() * characters.length)];
    }
    // Set the generated password as state
    setPassword(randomPassword);
    // Copy the password to the clipboard
    navigator.clipboard.writeText(randomPassword);
    notify();
  };
  return (
    <div className="App">
      <Heading name={name} />
      <PasswordWrapper
        password={password}
        generatePassword={generatePassword}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
