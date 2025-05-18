import { useState } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import Preview from './components/Preview';


function App() {

  return (
    <div>
      <TextArea></TextArea>
      <Preview textToRender={"# Hello world"}></Preview>
    </div>
  );
}

export default App
