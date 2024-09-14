"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Star.tsx
const react_1 = __importDefault(require("react"));
const Star = ({ filled, onClick }) => {
    return (react_1.default.createElement("svg", { fill: filled ? "#D3BCA2" : "#e0e0e0", height: "28", viewBox: "0 0 18 18", width: "28", xmlns: "http://www.w3.org/2000/svg", onClick: onClick },
        react_1.default.createElement("path", { d: "M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" }),
        react_1.default.createElement("path", { d: "M0 0h18v18H0z", fill: "none" })));
};
exports.default = Star;
