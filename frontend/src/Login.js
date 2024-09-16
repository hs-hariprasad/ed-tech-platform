import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Login({ onLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
        email,
        password,
      });
      setMessage(response.data.message);
      if (response.data.message === "User registered successfully!") {
        onLogin();
      }
    } catch (error) {
      setMessage("Error registering user");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            fullWidth
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            fullWidth
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
      </Grid>
      <TextField
        label="Email"
        type="email"
        fullWidth
        required
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        required
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Register
      </Button>
      {message && (
        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}

export default Login;