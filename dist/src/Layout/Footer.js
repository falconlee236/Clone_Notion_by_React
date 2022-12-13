"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Footerstyle = styled_components_1.default.div `
    margin-bottom: ${props => props.margin || "0px"};
`;
function Footer({ children }) {
    return (react_1.default.createElement(Footerstyle, null, children ? children : "this is footer"));
}
exports.default = Footer;
