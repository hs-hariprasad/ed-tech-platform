import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "./ThemeContext";
import Login from "./Login";
import MainPage from "./MainPage";
import "./App.css";

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Container>
      <header className="App-header">
        {isLoggedIn ? (
          <MainPage />
        ) : (
          <div>
            <Typography variant="h4" gutterBottom>
              Welcome to Ed-Tech Platform
            </Typography>
            <Login onLogin={handleLogin} />
            <Button variant="contained" onClick={toggleTheme} sx={{ mt: 2 }}>
              Switch to {darkMode ? "Light" : "Dark"} Mode
            </Button>
          </div>
        )}
      </header>
    </Container>
  );
}

export default App;