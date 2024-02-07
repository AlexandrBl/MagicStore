require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.route');
const { checkUser } = require('./middleware/auth');

const app = express();
serverConfig(app);
app.use(checkUser);
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log('Server started'));
