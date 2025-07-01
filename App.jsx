import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Text Converter</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows="8"
        cols="60"
        placeholder="Enter your text here..."
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Character Count:</strong> {text.length}</p>
        <p><strong>Word Count:</strong> {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</p>
      </div>
    </div>
  );
}

export default App;
