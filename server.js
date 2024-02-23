const express = require('express');
const multer = require('multer');
const app = express();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/upload', upload.single('file-upload'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(3000, () => console.log('Server started on port 3000'));