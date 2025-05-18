import { useState } from "react";

function TextArea() {

    const [inputText, setInputText] = useState("");

    return (
        <div className="input-container">
            <textarea
                name=""
                id=""
                placeholder="Begin typing Markdown to get started..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
        </div>
    );
}

export default TextArea