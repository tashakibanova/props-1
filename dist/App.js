"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// App.tsx
const react_1 = __importDefault(require("react"));
const Stars_1 = __importDefault(require("./components/Stars"));
const App = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("h1", null, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0444\u0438\u043B\u044C\u043C\u043E\u0432"),
    react_1.default.createElement(Stars_1.default, null)));
exports.default = App;
