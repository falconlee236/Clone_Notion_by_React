import React from 'react';
import Contents from './Layout/Contents';
import {ButtonInfoContext, ButtonInfo} from './context/ButtonInfoContext' ;


function App() {
  return (
    <ButtonInfoContext.Provider value={ButtonInfo}>
      <Contents />
    </ButtonInfoContext.Provider>
  );
}

export default App;


/*
<ButtonInfoContext value={ButtonInfo}>
      <Contents />
    </ButtonInfoContext>
*/