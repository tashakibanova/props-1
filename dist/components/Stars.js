"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Stars.tsx
const react_1 = __importStar(require("react"));
const Star_1 = __importDefault(require("./Star"));
require("../css/stars.css");
const Stars = ({ count = 0 }) => {
    const [rating, setRating] = (0, react_1.useState)(count); // Состояние для рейтинга
    // Проверяем, что значение рейтинга является числом и находится в допустимом диапазоне
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        return null; // Возвращаем null, если условие не выполнено
    }
    // Генерируем массив звезд в зависимости от рейтинга
    const starsArray = Array.from({ length: 5 }, (_, index) => (react_1.default.createElement("li", { key: index },
        react_1.default.createElement(Star_1.default, { filled: index < rating, onClick: () => setRating(index + 1) }))));
    return (react_1.default.createElement("ul", { className: "card-body-stars u-clearfix" }, starsArray));
};
exports.default = Stars;
