const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, './frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend/dist/index.html'))
})
const port = process.env.PORT || 3000;
app.listen(port);