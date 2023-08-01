// npm install --save-dev @types/express
// const express = require('express');
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(401).json({
    ok: false,
    msg: 'Not token foun',
  });
  // res.json({
  // message: 'Hello world',
  // });
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
