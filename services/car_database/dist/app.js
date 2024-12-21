"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log("Testing middleware");
    next();
});
app.get("/api/me", (req, res) => {
    res.json({ msg: "Welcome to the API" });
    console.log("Yess");
});
exports.default = app;
