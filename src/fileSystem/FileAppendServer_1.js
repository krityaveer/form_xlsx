import React, { useState } from 'react';

const FileAppendServer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://docs.google.com/document/d/1FX72q-D2Z_X6r7lBsHcUhRoIWK3Izat3W9AP895I__s/edit?usp=sharing', {
      method: 'GET',
      headers: {
        
        "Origin": "https://docs.google.com",
        "Connection": "keep-alive",
        "Content-Length": "4",
        "Content-Type": "application/x-www-form-urlencoded",
        "data": "xxxxx",
        

      },
      
    })
      .then(response => response)
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error('There was an error appending the data!', error);
      });
  };

  return (
    <div>
      <h1>File Appender</h1>
      <form onSubmit={handleSubmit}>
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

export default FileAppendServer;
