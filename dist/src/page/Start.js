"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("../Layout/Header"));
const Footer_1 = __importDefault(require("../Layout/Footer"));
function Start() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, { title: "\uC2DC\uC791\uD558\uAE30" }),
        "\uC5EC\uAE30\uB294 \uC2DC\uC791 \uC785\uB2C8\uB2E4.",
        react_1.default.createElement(Footer_1.default, null)));
}
;
exports.default = Start;
