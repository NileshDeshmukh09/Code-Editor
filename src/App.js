// src/App.js
import React from 'react';
import CodeEditor from './components/CodeEditor';
import imageUrls from './constants/imageUrls';

const App = () => {
  return (
    // To style a CodeEditor
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh', fontFamily: 'Fira Code' }}>\
     <img src={imageUrls.monitor2} alt='computer'  width={'35%'}/> 
      <div style={{ display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center' }}>
        <h1 style={{ textAlign: 'center' , color : '#00B496' }}>TealFeed Code Editor</h1>
        <p style={{ textAlign: 'center' ,  width : '80%' , fontSize : '14px', color : '#44475B'}}>CodeEditor in React with Prism React Renderer for highlighting JSX, simplifying code editing and viewing in web apps</p>
        <CodeEditor />
      </div> 
      {/* <img src={imageUrls.monitor1} alt='computer' width={'200px'}/> */}
    </div>
  );
};

export default App;
