const express = require("express");
const middlewares = require ("./middleware/logger.js");
const morgans = require("morgan");
const toursRouter = require("./routers/tour.router.js");
const dotenv = require("dotenv");
const usersRoute = require("./routers/user.router.js");
const usersRouter = require("./routers/user.router.js");

dotenv.config( "./.env");

const app = express();
const PORT =3000;

console.log(app.get("env"));

console.log(process.env);

// own middleware


app.use(express.json()); // middlewares
app.use(middlewares.mylogger);
app.use(morgans("dev"));

// app.route("/api/v1/tours").get(tourCtrl.getAllTours).post(tourCtrl.postNewTour);
// app.route("/api/v1/users").get(usetctrl.getAllUsers).post(usetctrl.postNewUser);


app.use("/api/v1/tours", toursRouter)
app.use("/api/v1/auth", usersRouter)
app.use("/api/v1/users",usersRouter)
  
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${process.env.PORT}`)
});
