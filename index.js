const express = require("express"); // This package returns a function using which we can initiate a new express application object.
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

app.listen(3333, () => {
    // This callback will executed everytime when the server starts
    console.log("Server started successfully");
})
