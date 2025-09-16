// // server.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import router from "../route.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use(router);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // Start server
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

///// serverless function version
// backend/src/api/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(router);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


export default app;
