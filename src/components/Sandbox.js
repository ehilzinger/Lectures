// Sandbox.js
import React, { useState } from 'react';


const Sandbox = ({exerciseText, solution}) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const executeCode = () => {
    try {
      const result = new Function(code)();
      if (result !== undefined && result !== null) {
        setOutput(result.toString());
      } else {
        setOutput(''); // Clear output if result is undefined or null
      }
      setError('');
      if(result === solution) {
        alert("Right!") //replace with toast someday
      }
    } catch (err) {
      setError(err.toString());
      setOutput(''); // Clear output in case of error
    }
    
  };


  const handleKeyDown = (event) => {
    // Check if Shift + Enter is pressed (key code 13 is Enter)
    if (event.shiftKey && event.keyCode === 13) {
      event.preventDefault(); // Prevent the default newline behavior
      executeCode();
    }
  };
  

  const textareaStyle = {
    width: '100%',
    boxSizing: 'border-box', // Ensure padding and border are included in the width
    marginBottom: '10px', // Optional: Add margin bottom to separate from the button
    resize: 'none', // Disable textarea resizing
    borderRadius: '8px', // Rounded corners
    padding: '10px', // Optional: Add padding inside textarea
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#004766',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const announcementStyle =  {
    backgroundColor: 'red',
    borderRadius: '4px',
    padding: "20px",
    fontWeight: "bold"
  }

  return (
    <div>
        <p style={announcementStyle}>JavaScript Integration is still in early access!</p>
        <p>{exerciseText}</p>
      <textarea
        onKeyDown={handleKeyDown} 
        style={textareaStyle}
        rows={10}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write JavaScript code here..."
      />
      <br />
      <button style={buttonStyle} onClick={executeCode}>Run Code</button>
      <br />
      <div style={{marginTop: "10px"}}>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
      <div>
        <h3>Error:</h3>
        <pre style={{ color: 'red' }}>{error}</pre>
      </div>
    </div>
  );
};

export default Sandbox;
