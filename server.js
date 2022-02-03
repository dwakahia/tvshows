const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./backend/routes/index')
const path = require('path')
const bodyParser = require('body-parser');
const sequelize = require('./backend/util/database');
const models = require('./backend/model/index');


app.use(bodyParser.json())

app.use(express.json())
const cors = require('cors');
app.use(cors());


app.use('/api/v1', routes);


app.use(express.static(path.join(__dirname, './frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend/dist/index.html'))
})


sequelize.sync({
    force: true,
}).then(result => {
    console.log(result);
    app.listen(port, () => {
        console.log(`listening at port ${port}`)
    })
}).catch(error => {
    console.log(error);
});