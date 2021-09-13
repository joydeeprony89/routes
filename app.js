const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
console.log('loaded tour routes')
//const userRouter = require('./routes/userRoutes')

const app = express();
console.log(app.get('env'));

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
console.log('loaded express json')
app.use(express.static(`${__dirname}/public`));
console.log('loaded static files')

app.use((req, res, next) => {
    debugger;
    console.log('Hello from the middleware 👋');
    next();
});

app.use((req, res, next) => {
    debugger;
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/tours', tourRouter);
//app.use('/api/v1/users', userRouter);
console.log('loaded final lines')
module.exports = app;
