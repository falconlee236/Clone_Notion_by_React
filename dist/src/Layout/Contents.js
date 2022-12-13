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
exports.DrawerOpenContext = void 0;
const react_1 = __importStar(require("react"));
const Sidebar_1 = __importDefault(require("./Sidebar"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("../page/Home"));
const Start_1 = __importDefault(require("../page/Start"));
const QuickMemo_1 = __importDefault(require("../page/QuickMemo"));
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const Contentstyle = styled_components_1.default.div `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;
const Main = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 100vh;
    //width: 84.5vw;
    width: ${props => props.isOpen ? "84.5vw" : "100vw"};
`;
function Contents() {
    const [open, setOpen] = (0, react_1.useState)(true);
    const toggleDrawer = (() => setOpen(!open));
    return (react_1.default.createElement(exports.DrawerOpenContext.Provider, { value: [toggleDrawer, open] },
        react_1.default.createElement(Contentstyle, null,
            react_1.default.createElement(Drawer_1.default, { variant: 'persistent', anchor: 'left', open: open },
                react_1.default.createElement(Sidebar_1.default, { height: "100vh" })),
            react_1.default.createElement(Main, { isOpen: open },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/start', element: react_1.default.createElement(Start_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/quickmemo', element: react_1.default.createElement(QuickMemo_1.default, null) }))))));
}
exports.default = Contents;
exports.DrawerOpenContext = (0, react_1.createContext)(null);
