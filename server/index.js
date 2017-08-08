import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./router";
import mongoose from "mongoose";
import path from "path";

// DB setup create new database named "photoSharingApp"
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost:27017/photoSharingApp", {
//     useMongoClient: true
// })
//     .then(() => console.log("connection succesful"))
//     .catch((err) => console.error(err));


mongoose.connect("mongodb://localhost/cs142project6", {
    useMongoClient: true
})
    .then(() => console.log("connection succesful"))
    .catch((err) => console.error(err));

// App setup
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(express.static(path.join(__dirname, 'public')));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listen on:", port);