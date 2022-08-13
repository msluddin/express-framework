import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

//Database Connection
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((err) => {
      throw err;
    });
};

//Middleware
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

//Server connection
const port = process.env.PORT || 5000;

app.listen(port, () => {
  connect();
  console.log(`Server has been running http://localhost:${port}`);
});
