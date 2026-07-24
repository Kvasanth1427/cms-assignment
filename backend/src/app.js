import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import pageRoutes from "./routes/pageRoutes.js";

const app = express();

// Allow frontend to access backend
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/pages", pageRoutes);

app.get("/", (req, res) => {
  res.send("Hello Vasanth! 🚀");
});

export default app;