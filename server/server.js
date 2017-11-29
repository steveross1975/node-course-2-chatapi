const path = require('path');//to clean the path
const express = require('express');
//const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

const indexPath = publicPath + '/index.html';
console.log(indexPath);
var app = express();

//app.use(bodyParser.json()); //to send JSON to the Express app
app.use(express.static(publicPath));

// app.get(publicPath, (req, res) => {
//   res.render('index', {});
// });

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
