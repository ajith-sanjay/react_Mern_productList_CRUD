const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.options('*', cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const dbUrl = require('./config/keys.js').mongoURL;
mongoose.connect(dbUrl , { useNewUrlParser: true }).then(function(err){
	console.log('connected to the db');

	
}).catch(function(err){
	console.log(err);
});

app.use('/api/items', items);
const port  = process.env.PORT || 5000;

app.listen(port , function(){
	console.log(`application is listening on port ${port}`);
})