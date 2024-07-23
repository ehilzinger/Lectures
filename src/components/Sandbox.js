// Sandbox.js
import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import Banner from "./Banner";

// IDEAS:
// integrate LLM assistant to aid with incomplete coding or to provide hints & tips for exercises

const Sandbox = ({exerciseText, solution}) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [exploding, setExploding] = useState(false);
  const [correct, setCorrect] = useState(false);

  const executeCode = () => {
    try {
      const result = new Function(code)();
      if (result !== undefined && result !== null) {
        setOutput(result.toString());
      } else {
        setOutput(''); 
      }
      setError('');
      if(result === solution) {
        setExploding(true)
        setCorrect(true)
      }
    } catch (err) {
      setError(err.toString());
      setOutput(''); 
    }
    
  };

  const reset = () => {
    setCode('');
    setCorrect(false);
    setExploding(false);
    setOutput('');
    setError('');
  }


  const handleKeyDown = (event) => {
    // Check if Shift + Enter is pressed (key code 13 is Enter)
    if (event.shiftKey && event.keyCode === 13) {
      event.preventDefault(); // Prevent the default newline behavior
      executeCode();
    }
  };
  

  const textareaStyle = {
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px', 
    resize: 'none', 
    borderRadius: '8px', 
    padding: '10px',
  };

  const buttonStyle = {
    padding: '10px',
    marginRight: '10px',
    backgroundColor: '#004766',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const announcementStyle =  {
    background: 'linear-gradient(45deg, #6BB9DB, #AA55FF)',
    borderRadius: '4px',
    padding: "20px",
    fontWeight: "bold"
  }

  return (
    <div style={{ borderRadius: "10px", padding: '20px', backgroundColor: "rgba(37, 194, 160, .35)" }}>
        {//<p style={announcementStyle}>JavaScript Integration is still in early access!</p>
        }
        <p><h3>Task: </h3>{exerciseText}</p>
      <textarea
        onKeyDown={handleKeyDown} 
        style={textareaStyle}
        rows={10}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Code..."
      />
      
      <br />
      <button style={buttonStyle} onClick={executeCode}>
        Execute Code (⇧ + ↵)
        {exploding && <ConfettiExplosion onComplete={() => setExploding(false)} />}  
      </button>
      <button style={buttonStyle} onClick={reset}>Reset</button>
      <br />
     {output &&  <div style={{marginTop: "10px"}}>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>}
      {error && <div>
        <h3>Error:</h3>
        <pre style={{ color: 'red' }}>{error}</pre>
      </div>}
      {correct && <Banner text="Correct!" />}
    </div>
  );
};

export default Sandbox;
