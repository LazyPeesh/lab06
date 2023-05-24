var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 1. Khai báo thư viện mongose để connect đến database server
var mongoose = require('mongoose');

// 2. Khai báo đường dẫn URI đến database (local hoặc cloud)
// Note: Cần khai báo rõ tên của database cần sử dụng trong URI
var local = "mongodb://127.0.0.1:27017/gch1101";
var cloud = "mongodb+srv://mongo:mongo@cluster0.cdadmxu.mongodb.net/";

// 3. Connect đến database
// Code này chỉ dùng cho mongoose phiên bản cũ
/* mongoose.connect(local, (err) => {
  if (err) {
    console.error("Connect to DB failed");
    console.error(err);
  } else {
    console.log("Connect to DB success");
  }
}); */

// Dùng code mới cho mongose version mới nhất
mongoose.connect(local)
  .then(() => { console.log("Connect to DB succeed !") })
  .catch((err) => {
    console.error(err)
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
