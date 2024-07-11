// import React from 'react';
import React, { useState } from 'react';

const FileComponent= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fileName, setFileName] = useState('user_info.txt');

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
    const fileContent = `Name: ${name}\nEmail: ${email}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
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


// function FileComponent() {
//   // var fs = require('fs');
//   writeFileSync('newfile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
  
  return (
    <div>
      <h1>User Info Form</h1>
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
  )


};

export default FileComponent;