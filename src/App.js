import React, { useReducer } from 'react';
import Contents from './Layout/Contents';
import { createContext } from 'react';
import ButtonInfo from './context/ButtonInfoContext';




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
