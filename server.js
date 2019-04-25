//Install express server
const express = require('express');
const path = require('path');

const app = express();
let server = require('http').Server(app);
// Serve only the static files form the dist directory
app.use(express.static('./dist/ang-movies'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/ang-movies/index.html'));
});

var port = process.env.PORT || 8000;
// Start the app by listening on the default Heroku port
server.listen(port, () => {
  console.log("App is running on port " + port);
});

// server.listen(port, () => {
//   console.log("App is running on port " + port);
// });
