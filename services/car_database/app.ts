import express, { Response } from "express";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("Testing middleware");

  next();
});

app.get("/api/me", (req, res) => {
  res.json({ msg: "Welcome to the API" });
  console.log("Yess");
});

export default app;
