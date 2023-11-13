const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3001;
const route = require('./routes');
const authMiddleware = require('./app/middlewares/authMiddleware');
const renderHashedWords = require('./app/helpers/renderHashedWords');

const session = require('express-session');
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
    cookie: { maxAge: 100000 },
  })
);

// method override form submission
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// connect to mongodb
const db = require('./config/db');
db.connect();

// config POST request
app.use(express.urlencoded({ extended: true }));

// Http logger
// showing http request, response info in the terminal
// app.use(morgan("combined"));

// config static folder
app.use(express.static(path.join(__dirname, 'public')));

// Template handlebars engine
// config extension from .handlebars to .hbs
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      renderHashedWords,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// customer middleware
app.use(authMiddleware);

// route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
