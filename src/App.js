import React, { useReducer } from 'react';
import Contents from './Layout/Contents';
import { createContext } from 'react';


const TopButtons = [
    {
        icon: "magnify",
        title: "빠른검색"
    },
    {
        icon: "clock",
        title: "모든 업데이트"
    },
    {
        icon: "gear",
        title: "설정과 멤버"
    }    
  ]
  
  const MiddleButtons = [
    {
        icon: "note",
        title: "시작하기",
        url: "/start"
    },
    {
        icon: "pin",
        title: "빠른메모",
        url: "/quickmemo"
    }
  ]
  
  const PageAddButton = [
    {
        icon: "plus",
        title: "페이지 추가"
    }
  ]
  
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
  ]
  
  
const ButtonInfo = {
    TopInfo: TopButtons,
    MiddleInfo: MiddleButtons,
    PageAddInfo: PageAddButton,
    BottomInfo: BottomButtons
  }

function reducer(state, action){
  const newobj = {
    icon: "note",
    title: "새 페이지들",
  }
  switch(action.type){
    case 'CREATE_USER':
      return {
        ...state,
         MiddleInfo: state.MiddleInfo.concat(newobj)
      };
    default:
      return state;
  }
}

export const ButtonInfoContext = createContext(null);

function App() {
  return (
    <ButtonInfoContext.Provider value={useReducer(reducer, ButtonInfo)}>
      <Contents />
    </ButtonInfoContext.Provider>
  );
}

export default App;
