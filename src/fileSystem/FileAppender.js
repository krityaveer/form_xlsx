import React, { useState } from 'react';

const FileAppender = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fileName, setFileName] = useState('../file-appender/append_info.txt');
  const [existingFileContent, setExistingFileContent] = useState(''); // Holds initial content or existing appended content

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContent = `Name: ${name}\nEmail: ${email}\n`;
    const combinedContent = `${existingFileContent}\n${newContent}`;
    setExistingFileContent(combinedContent); // Update the existing content state
    const blob = new Blob([combinedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>File Appender</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            File Name:
            <input
              type="text"
              value={fileName}
              onChange={handleFileNameChange}
              placeholder="Enter file name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileAppender;
