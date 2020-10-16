const express = require('express');
const app = express();

const socketIO = require("socket.io");
const http = require("http");

const path = require('path');

let server = http.createServer(app);



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



// IO = esta es la comunicacion del backend
// Aqui se mantiene una conexion directa con el servidor
module.exports.io = socketIO(server);

require("./sockets/socket");




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});