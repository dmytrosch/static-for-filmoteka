// var static = require("node-static");

// var file = new static.Server("./static");

// require("http")
//     .createServer(function (request, response) {
//         request
//             .addListener("end", function () {
//                 // console.log(request.headers);

//                 request.url = "/";
//                 // console.log(request.url);
//                 file.serve(request, response, (e, res) => {
//                     console.log("in file: ", e, res);
//                 });
//             })
//             .resume();
//     })
//     .listen(8080);

///////////////////////

const express = require("express");
const app = express();

app.use(express.static("static"));

app.listen(8080, () => console.log("Server listen on 8080 port"));
