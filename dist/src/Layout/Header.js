"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const md_1 = require("react-icons/md");
const hi_1 = require("react-icons/hi");
const ai_1 = require("react-icons/ai");
const bs_1 = require("react-icons/bs");
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const material_1 = require("@mui/material");
const Contents_1 = require("./Contents");
const ViewHeadline_1 = __importDefault(require("@mui/icons-material/ViewHeadline"));
const Headerstyle = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84.5vw;
    height: 7vh;
    position: fixed;
`;
const HeaderButtonstyle = styled_components_1.default.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 10px 5px;
    height: 25px;
    width: 25px;
    &:hover{
        background: rgba(55, 53, 47, 0.08);
        color: rgb(55, 53, 47);
    }
    &.drawerController{
        visibility: ${props => props.isOpen ? "collapse" : "visible"};
    }
`;
const Tmpdiv = styled_components_1.default.div `
    display: flex;
`;
function Header({ title }) {
    const [toggleDrawer, open] = (0, react_2.useContext)(Contents_1.DrawerOpenContext);
    function newDateformat() {
        const today = new Date();
        return `${today.getMonth()}월 ${today.getDate()}일 편집`;
    }
    return (react_1.default.createElement(Headerstyle, null,
        react_1.default.createElement(Tmpdiv, null,
            react_1.default.createElement(HeaderButtonstyle, { className: 'drawerController', style: { width: '40px' }, isOpen: open, onClick: toggleDrawer },
                react_1.default.createElement(Tooltip_1.default, { title: "\uC0AC\uC774\uB4DC\uBC14 \uC5F4\uAE30", placement: 'right' },
                    react_1.default.createElement(material_1.IconButton, null,
                        react_1.default.createElement(ViewHeadline_1.default, null)))),
            react_1.default.createElement(HeaderButtonstyle, { style: { width: '40px' } },
                react_1.default.createElement(material_1.IconButton, null,
                    react_1.default.createElement("span", { style: { fontSize: '15px' } }, title)))),
        react_1.default.createElement(Tmpdiv, null,
            react_1.default.createElement(HeaderButtonstyle, { style: { width: '100px' } },
                react_1.default.createElement(Tooltip_1.default, { title: newDateformat(), placement: "bottom" },
                    react_1.default.createElement("span", { style: { fontSize: '12px' } }, newDateformat()))),
            react_1.default.createElement(HeaderButtonstyle, null,
                react_1.default.createElement(Tooltip_1.default, { title: "\uC6F9\uC5D0\uC11C \uACF5\uC720\uD558\uAC70\uB098 \uAC8C\uC2DC", placement: 'bottom' },
                    react_1.default.createElement("span", { style: { fontSize: '12px' } }, "\uACF5\uC720"))),
            react_1.default.createElement(HeaderButtonstyle, null,
                react_1.default.createElement(Tooltip_1.default, { title: "\uB313\uAE00 \uC0AC\uC774\uB4DC\uBC14 \uC5F4\uAE30", placement: 'bottom' },
                    react_1.default.createElement(material_1.IconButton, null,
                        react_1.default.createElement(md_1.MdChatBubbleOutline, { size: 20 })))),
            react_1.default.createElement(HeaderButtonstyle, null,
                react_1.default.createElement(Tooltip_1.default, { title: "\uC5C5\uB370\uC774\uD2B8 \uC0AC\uC774\uB4DC\uBC14 \uC5F4\uAE30", placement: 'bottom' },
                    react_1.default.createElement(material_1.IconButton, null,
                        react_1.default.createElement(hi_1.HiOutlineClock, { size: 20 })))),
            react_1.default.createElement(HeaderButtonstyle, null,
                react_1.default.createElement(Tooltip_1.default, { title: "\uC0AC\uC774\uB4DC\uBC14\uC5D0 \uC774 \uD398\uC774\uC9C0 \uACE0\uC815 Cntr+Art+Shift+F", placement: 'bottom-end' },
                    react_1.default.createElement(material_1.IconButton, null,
                        react_1.default.createElement(ai_1.AiOutlineStar, { size: 20 })))),
            react_1.default.createElement(HeaderButtonstyle, null,
                react_1.default.createElement(Tooltip_1.default, { title: "\uC2A4\uD0C0\uC77C, \uB0B4\uBCF4\uB0B4\uAE30 \uB4F1", placement: 'bottom-end' },
                    react_1.default.createElement(material_1.IconButton, null,
                        react_1.default.createElement(bs_1.BsThreeDots, { size: 20 })))))));
}
exports.default = Header;
