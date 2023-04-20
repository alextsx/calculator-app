const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')


const numberRouter = require('./routers/numberRouter');
const authRouter = require('./routers/authRouter');
const refreshRouter = require('./routers/refreshRouter');
const errorHandler = require('./middlewares/errorHandler');


app.use(express.json());
app.use(cookieParser());

app.use('/api/number', numberRouter);
app.use('/api/auth', authRouter);
app.use('/api/refresh', refreshRouter);
app.use(errorHandler);
module.exports = app;