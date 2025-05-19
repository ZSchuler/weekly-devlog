import './TextArea.css'

function TextArea({markdown, setMarkdown}) {

    return (
        <div className="input-container">
            <textarea
                className='text-area'
                name=""
                id=""
                placeholder="Begin typing Markdown to get started..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
        </div>
    );
}

export default TextArea