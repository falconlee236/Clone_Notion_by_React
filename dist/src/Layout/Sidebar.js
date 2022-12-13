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
const react_1 = __importDefault(require("react"));
const Buttons_1 = __importStar(require("../component/Buttons"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_2 = require("react");
const App_1 = require("../App");
const Sidebarstyle = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(251 251 250);
    height: ${props => props.height || '100vh'};
    width: 15.5vw;
`;
const SidebarHeader = styled_components_1.default.div `
    margin: 0px;
`;
const SidebarFooter = styled_components_1.default.div `
    margin: 0px;
`;
const SidebarMiddlestyle = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
`;
function Sidebar({ height }) {
    const [ButtonInfo] = (0, react_2.useContext)(App_1.ButtonInfoContext);
    return (react_1.default.createElement(Sidebarstyle, { height: height },
        react_1.default.createElement(SidebarHeader, null,
            react_1.default.createElement(Buttons_1.ButtonItem, { icon: "brain", title: "sangyuns brain", isTitle: true, isMiddle: true })),
        react_1.default.createElement(SidebarMiddlestyle, null,
            react_1.default.createElement(Buttons_1.default, { itemArr: ButtonInfo.TopInfo, isArrow: false }),
            react_1.default.createElement(Buttons_1.default, { itemArr: ButtonInfo.MiddleInfo, isArrow: true, isMiddle: true }),
            react_1.default.createElement(Buttons_1.default, { itemArr: ButtonInfo.PageAddInfo, isArrow: false, isAdd: true }),
            react_1.default.createElement(Buttons_1.default, { itemArr: ButtonInfo.BottomInfo, isArrow: false })),
        react_1.default.createElement(SidebarFooter, null,
            react_1.default.createElement(Buttons_1.ButtonItem, { icon: "plus", title: "\uC0C8\uD398\uC774\uC9C0", isTitle: true }))));
}
exports.default = Sidebar;
