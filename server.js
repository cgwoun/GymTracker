
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var main = require('./routes/main');
var login = require('./routes/login');
var addUser = require('./routes/addUser');
var addActivity = require('./routes/addActivity');
var addData = require('./routes/addData');

var activity = require('./routes/activity');
var motivate = require('./routes/motivate');
// Example route
// var user = require('./routes/user');
var data = require('./userData.json');

app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/motivate', motivate.view);
app.get('/activity/:name', activity.view);
app.get('/main/:name/:defaultCategory/:defaultActivity/:dataArray', main.view);
app.get('/addUser', addUser.addUsers);
app.get('/addActivity', addActivity.addActivities);
app.get("/addData",addData.addValue);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
