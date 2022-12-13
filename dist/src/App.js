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
exports.ButtonInfoContext = void 0;
const react_1 = __importStar(require("react"));
const Contents_1 = __importDefault(require("./Layout/Contents"));
const react_2 = require("react");
const ButtonInfoContext_1 = __importDefault(require("./context/ButtonInfoContext"));
function reducer(state, action) {
    const newobj = {
        icon: "note",
        title: "제목 없음",
    };
    switch (action.type) {
        case 'CREATE_USER':
            return Object.assign(Object.assign({}, state), { MiddleInfo: state.MiddleInfo.concat(newobj) });
        default:
            return state;
    }
}
exports.ButtonInfoContext = (0, react_2.createContext)(null);
function App() {
    return (react_1.default.createElement(exports.ButtonInfoContext.Provider, { value: (0, react_1.useReducer)(reducer, ButtonInfoContext_1.default) },
        react_1.default.createElement(Contents_1.default, null)));
}
exports.default = App;
