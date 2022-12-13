"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TopButtons = [
    {
        icon: "magnify",
        title: "빠른검색"
    },
    {
        icon: "clock",
        title: "업데이트"
    },
    {
        icon: "gear",
        title: "설정과 멤버"
    }
];
const MiddleButtons = [
    {
        icon: "notes",
        title: "시작하기",
        url: "/start"
    },
    {
        icon: "pin",
        title: "빠른메모",
        url: "/quickmemo"
    }
];
const PageAddButton = [
    {
        icon: "plus",
        title: "페이지 추가"
    }
];
const BottomButtons = [
    {
        icon: "template",
        title: "탬플릿"
    },
    {
        icon: "download",
        title: "가져오기"
    },
    {
        icon: "trashcan",
        title: "휴지통"
    }
];
const ButtonInfo = {
    TopInfo: TopButtons,
    MiddleInfo: MiddleButtons,
    PageAddInfo: PageAddButton,
    BottomInfo: BottomButtons
};
exports.default = ButtonInfo;
