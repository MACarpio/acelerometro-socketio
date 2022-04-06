const express = require('express');
const app = express();
const socket = require('socket.io');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Configuración del servidor
app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.render('index.ejs');
})

const port = process.env.PORT || 3000;
server.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
