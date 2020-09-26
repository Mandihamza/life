import React from 'react';
import { DrawGrid } from './components/game/DrawGrid'

function App(props) {
  return (
  <>
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', maxWidth: '80vw', marginLeft: '10vw'}}>
    <DrawGrid />
    </div>
  </>
  );
};

export default App;