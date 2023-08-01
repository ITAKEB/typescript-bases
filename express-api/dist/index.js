"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm install --save-dev @types/express
// const express = require('express');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
