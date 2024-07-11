const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const reader = require('xlsx') 

const app = express();
const PORT = 5000;
const filePath = path.join("../file-appender/", 'append_toxl.xlsx'); // Ensure the file is in the same directory as server.js
const file = reader.readFile(filePath);



app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));

app.use(bodyParser.json());

app.post('/append', (req, res) => {
  const { name, email } = req.body;
  
  const newContent = [{
    Name: `${name}`,  
    Email: `${email}`
  }];

  reader.utils.sheet_add_json(file.Sheets[file.SheetNames[0]], newContent, {skipHeader: true}); 


  reader.writeFile(file,'./append_toxl.xlsx');
  res.status(200).json({ message: 'Data appended successfully' });
  // Writing to our file 
  // fs.appendFile(filePath, newContent, (err) 
  // reader.writeFile(file,'./append_toxl.xlsx', (err) => {
  //   if (err) {
  //     return res.status(500).json({ error: 'Failed to append to file' });
  //   }
  //   res.status(200).json({ message: 'Data appended successfully' });
  // });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
