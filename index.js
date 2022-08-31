const express = require("express"); // This package returns a function using which we can initiate a new express application object.
const User = require("./src/models/user")
const { connect } = require("./src/config/database");
const app = express();  //Executing the function returned a new express application
const apiRouter = require("./src/routes/index");
app.use("/api",apiRouter)

app.get('/', (req, res) => {
    res.status(200).send({
        success:true,
        message:"Successfully hitting the API",
        data:{}
    });
});

app.listen(3333, async() => {
    // This callback will executed everytime when the server starts
    await connect();
    console.log("MongoDB connected successfully");
    console.log("Server started successfully");
    let user = await User.create({
        email:"abc@email.com",
        password: 12345,
        userName:"abc"
    });
    console.log(user);
})
