const express = require("express");

const PORT = process.env.PORT || 8888;

const server = express();

server.use("/*", express.static(__dirname + "/static"));

server.listen(PORT, () => {
    console.log(`Server startes listen on port ${PORT}`);
});
