const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

//database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.get("/", (req, res) => {
  res.send("test1 ");
});

// Routes
const userRoutes = require("./routes/auth-route");
const categoryRoutes =require("./routes/category-route");
const adminRoutes =require("./routes/admin-routes");
const coAdminRoutes =require("./routes/coadmin-routes");
const blogRoutes =require("./routes/blog-route");
const usersRoutes = require("./routes/user-routes");
app.use("/api/auth", userRoutes);
app.use("/api/admin",categoryRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/coadmin",coAdminRoutes);
app.use("/api/blogs",blogRoutes);
app.use("/api/user",usersRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));




//Error handler
app.use((req, res, next) => {
  res.status(404);
  res.send({
    error: "not found",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
