import './Buttons.css'

function Buttons({textToDownload})
{
    
    const downloadFile = () => {
        const link = document.createElement("a");
        const content = textToDownload;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "markdown.md";
        link.click();
        URL.revokeObjectURL(link.href);
    }

    const copyText = () => {
        navigator.clipboard.writeText(textToDownload);
        //alert("Copied the text: " + textToDownload);
    }
    
    return (
        <div className="buttons-container">
            <button onClick={copyText}>Copy</button>
            <button onClick={downloadFile}>Download</button>
        </div>
    );
}

export default Buttons