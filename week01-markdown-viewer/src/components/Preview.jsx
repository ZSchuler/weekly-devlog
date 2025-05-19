import './Preview.css'
import Markdown from 'react-markdown'

function Preview({markdown}) {
    
    return (
        <div className='preview-container'>
            <Markdown>{markdown}</Markdown>
        </div>
    );
}

export default Preview