const express = require("express"); // This package returns a function using which we can initiate a new express application object.
const User = require("./src/models/user");
const { connect } = require("./src/config/database");
const apiRouter = require("./src/routes/index");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRouter = require("./src/routes/authRoutes")
require("./src/utils/auth")

const app = express();  //Executing the function returned a new express application


app.use(bodyParser.urlencoded({extended: false}))
app.use("/", authRouter);

app.use("/api", passport.authenticate('jwt', {session:false}), apiRouter);

// app.get('/', (req, res) => {
//     res.status(200).send({
//         success:true,
//         message:"Successfully hitting the API",
//         data:{}
//     });
// });

// app.use(function (err, req, res, next){
//     res.status(err.status || 500);
//     res.json({
//         success: false,
//         error : err
//     });
// });

app.listen(3333, async() => {
    // This callback will executed everytime when the server starts
    await connect();
    console.log("MongoDB connected successfully");
    console.log("Server started successfully");
});
