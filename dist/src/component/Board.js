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
const react_1 = __importStar(require("react"));
const react_quill_1 = __importStar(require("react-quill"));
require("react-quill/dist/quill.snow.css");
const styled_components_1 = __importDefault(require("styled-components"));
const quill_image_resize_1 = __importDefault(require("quill-image-resize"));
react_quill_1.Quill.register('modules/ImageResize', quill_image_resize_1.default);
const Container = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 90vh;

    .editor{
        width: 80vw;
        height: 85vh;
        position: relative;
        top: 6vh;
    }
`;
function Board() {
    const modules = {
        toolbar: [
            //[{ 'font': [] }],
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
            ['clean']
        ],
        /* 추가된 코드 */
        ImageResize: {
            parchment: react_quill_1.Quill.import('parchment')
        }
    };
    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',
    ];
    const [value, setValue] = (0, react_1.useState)('');
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(react_quill_1.default, { theme: "snow", value: value || '', modules: modules, formats: formats, onChange: (content, delta, source, editor) => setValue(editor.getHTML()), className: "editor" })));
}
;
exports.default = Board;
//https://velog.io/@holim0/React-Quill-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
//https://jforj.tistory.com/211
