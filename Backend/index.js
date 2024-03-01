const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow credentials
  })
);

app.use(express.json());

require("./connectDB");

const customerRouter = require("./src/routes/customer");
const courseRouter = require("./src/routes/course");
const checkoutRouter = require("./src/routes/checkout");
const sessionRouter = require("./src/routes/session");
const watchlistRouter = require("./src/routes/watchlist");
const feedbackRouter = require("./src/routes/feedback");
const clarificationRouter = require("./src/routes/clarification");

app.use("/api/v1/src/uploads", express.static("./src/uploads"));
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/checkout", checkoutRouter);
app.use("/api/v1/session", sessionRouter);
app.use("/api/v1/watchlist", watchlistRouter);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/clarification", clarificationRouter);

// handle error
app.use((error, req, res, next) => {
  console.log(error);
  const status = error?.status || 500;
  return res.status(status).json({
    success: false,
    message: error?.message || "Internal Server Error",
  });
});

app.listen(5000, () => console.log("Server is running on port 5000"));
