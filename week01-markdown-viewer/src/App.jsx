import { useState } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import Preview from './components/Preview';
import Buttons from './components/Buttons';


function App() {

  const defaultText = `# Welcome! 👋  

*Type your Markdown here...*

---

_For information regarding how to use Markdown, check out [this Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)._`

  const [markdown, setMarkdown] = useState(defaultText);

  return (
    
    <div className='app-container'>
      
      <h1 className='title'>Markdown Viewer</h1>
      
      <div className='texts-container'>
        <TextArea markdown={markdown} setMarkdown={setMarkdown}/>
        <Preview markdown={markdown}></Preview>
      </div>

      <div className='buttons-container'>
        <Buttons textToDownload={markdown}/>
      </div>

    </div>
  );
}

export default App
