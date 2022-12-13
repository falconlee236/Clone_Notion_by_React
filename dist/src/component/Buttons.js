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
exports.ButtonItem = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const gi_1 = require("react-icons/gi");
const ai_1 = require("react-icons/ai");
const bs_1 = require("react-icons/bs");
const go_1 = require("react-icons/go");
const gi_2 = require("react-icons/gi");
const gr_1 = require("react-icons/gr");
const hi_1 = require("react-icons/hi");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("../App");
const md_1 = require("react-icons/md");
const Contents_1 = require("../Layout/Contents");
const ButtonContainer = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    background-color: rgb(251 251 250);
    display: flex;
    margin-right: auto;
    cursor: pointer;

    .visible{
        visibility: hidden;
    }

    // &는 자기 자신 선택
    &:hover{
        background: rgba(55, 53, 47, 0.08);
        color: rgb(55, 53, 47);
        .visible{
            visibility: ${props => props.isMiddle ? "visible" : "hidden"};
        }
   }
`;
const Buttonstyle = styled_components_1.default.div `
    box-sizing: border-box;
    font-size: ${props => props.isTitle ? "17px" : "14px"};
    padding-left: ${props => props.isArrow ? "10px" : "15px"};
    padding-top: ${props => props.isTitle ? "15px" : "5px"};
    height: ${props => props.isTitle ? "50px" : "30px"};
    width: 250px;
`;
const ButtonLayout = styled_components_1.default.div `
    margin-bottom: 10px;
`;
const SideButtonContainer = styled_components_1.default.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`;
const MiniButtonStyle = styled_components_1.default.span `
    padding: 3px 1px;
    margin: 0px 3px;

    &:hover{
        background: ${props => props.isMiddle ? "rgba(55, 53, 47, 0.2)" : null};
    }
`;
function ButtonItem({ icon, title, isArrow, isTitle, isMiddle }) {
    const icons = {
        magnify: react_1.default.createElement(gi_1.GiMagnifyingGlass, null),
        clock: react_1.default.createElement(ai_1.AiOutlineClockCircle, null),
        gear: react_1.default.createElement(bs_1.BsFillGearFill, null),
        left_tri: react_1.default.createElement(go_1.GoTriangleRight, null),
        brain: react_1.default.createElement(gi_2.GiBrain, null),
        note: react_1.default.createElement(gr_1.GrNote, null),
        notes: react_1.default.createElement(gr_1.GrNotes, null),
        pin: react_1.default.createElement(bs_1.BsFillPinAngleFill, null),
        plus: react_1.default.createElement(ai_1.AiOutlinePlus, null),
        template: react_1.default.createElement(hi_1.HiOutlineTemplate, null),
        download: react_1.default.createElement(hi_1.HiDownload, null),
        trashcan: react_1.default.createElement(gi_2.GiTrashCan, null)
    };
    const [toggleDrawer] = (0, react_1.useContext)(Contents_1.DrawerOpenContext);
    return (react_1.default.createElement(ButtonContainer, { isMiddle: isMiddle },
        react_1.default.createElement(Buttonstyle, { isArrow: isArrow, isTitle: isTitle },
            isArrow ?
                react_1.default.createElement("span", { style: { marginRight: "3px" } }, icons["left_tri"]) : null,
            react_1.default.createElement("span", { style: { marginRight: "5px" } }, icons[icon]),
            title),
        react_1.default.createElement(SideButtonContainer, null, isTitle ?
            react_1.default.createElement(MiniButtonStyle, { isMiddle: isMiddle, onClick: toggleDrawer },
                react_1.default.createElement(md_1.MdDoubleArrow, { className: "visible", style: { transform: "rotate(180deg)" } })) :
            (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(MiniButtonStyle, { isMiddle: isMiddle },
                    react_1.default.createElement(bs_1.BsThreeDots, { className: "visible" })),
                react_1.default.createElement(MiniButtonStyle, { isMiddle: isMiddle },
                    react_1.default.createElement(ai_1.AiOutlinePlus, { className: "visible" })))))));
}
exports.ButtonItem = ButtonItem;
function Buttons({ itemArr, isArrow, isTitle, isAdd, isMiddle }) {
    const [, dispatch] = (0, react_1.useContext)(App_1.ButtonInfoContext);
    const AddPage = (() => {
        dispatch({ type: 'CREATE_USER' });
    });
    return (react_1.default.createElement(ButtonLayout, { onClick: isAdd ? AddPage : null }, itemArr.map(item => {
        return (react_1.default.createElement(react_router_dom_1.Link, { to: item.url || "/", style: { textDecoration: "none", color: "black" } },
            react_1.default.createElement(ButtonItem, { icon: item.icon, title: item.title, isArrow: isArrow, isTitle: isTitle, isMiddle: isMiddle })));
    })));
}
exports.default = Buttons;
