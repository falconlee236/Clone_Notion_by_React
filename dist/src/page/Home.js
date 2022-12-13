"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("../Layout/Header"));
const Board_1 = __importDefault(require("../component/Board"));
function Home() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, { title: "\uD648" }),
        react_1.default.createElement(Board_1.default, null)));
}
;
exports.default = Home;
//https://velog.io/@holim0/React-Quill-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
//https://jforj.tistory.com/211
