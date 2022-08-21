var port = process.env.PORT || 3500;
const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors')

app.use(cors())
var bodyParser = require('body-parser')
// data base connection access
const db_config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'password@1234',
  database: 'ecommerce',
}
// giving access to load the uploads folder
// app.use('/uploads',express.static('uploads'))
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ limit: '500mb' }))
function handleDisconnect() {
  global.connection = mysql.createConnection(db_config); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {              // The server is either down
    if (err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } else {
      console.log("db is connected")
    }                                    // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {

    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually

      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      handleDisconnect();                              // server variable configures this)
    }
  });
}

handleDisconnect();

app.listen(port, () => { console.log(`App is listening port number:${port}`) })


// importing the file
const userPostCreate = require("./routes/userPostCreate")
app.use('/userPostCreate', userPostCreate);

const postLikeShare = require("./routes/postLikeShare")
app.use('/postLikeShare', postLikeShare);

const userComment = require("./routes/userComment")
app.use('/userComment', userComment);

const userRegister = require("./routes/userRegister")
app.use('/userRegister', userRegister);