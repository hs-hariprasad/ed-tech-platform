import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import { useTheme } from "./ThemeContext";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function MainPage() {
  const { darkMode, toggleTheme } = useTheme();

  const events = [
    {
      title: "Meeting with Team",
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ed-Tech Platform
          </Typography>
          <IconButton color="inherit">
            <CalendarTodayIcon />
          </IconButton>
          <Button color="inherit" onClick={toggleTheme}>
            Switch to {darkMode ? "Light" : "Dark"} Mode
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Upcoming Events
              </Typography>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Schedule a Meeting
              </Typography>
              {/* Add more form elements here if needed */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MainPage;