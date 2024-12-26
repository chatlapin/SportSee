const express = require("express");
const {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} = require("./data.js");

const app = express();

app.get("/api/user/:userId/performance", (req, res) => {
  const userId = parseInt(req.params.userId);
  console.log(`Requested userId: ${userId}`);
  const userPerformance = USER_PERFORMANCE.find(
    (user) => user.userId === userId
  );
  if (userPerformance) {
    res.json(userPerformance);
  } else {
    console.log(`User performance not found for userId: ${userId}`);
    res.status(404).json({ message: "User performance not found" });
  }
});

app.get("/api/user/:userId/activity", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userActivity = USER_ACTIVITY.find((user) => user.userId === userId);
  if (userActivity) {
    res.json(userActivity);
  } else {
    res.status(404).json({ message: "User activity not found" });
  }
});

app.get("/api/user/:userId/average-sessions", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userSessions = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === userId
  );
  if (userSessions) {
    res.json(userSessions);
  } else {
    res.status(404).json({ message: "User average sessions not found" });
  }
});

app.get("/api/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = USER_MAIN_DATA.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(2024, () => {
  console.log("Server is running on http://localhost:2024");
});
