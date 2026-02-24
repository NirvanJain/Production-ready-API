const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middleware/error.middleware");
const swaggerDocs = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Swagger
swaggerDocs(app);

// Error Middleware (ALWAYS LAST)
app.use(errorHandler);

module.exports = app;