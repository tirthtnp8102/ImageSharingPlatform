const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.single("image"), async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    const file = await uploadFile(req.file.buffer);
    console.log(file);

    return res.status(201).json({ message: "Post created successfully" });
})

module.exports = app;

