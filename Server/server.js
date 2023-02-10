const express = require('express');
const sequelize = require('./config/connection.js');

const api = require('./Server/controller');



const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded());
app.use(express.json());
app.use('/', api);


sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`Listening to the PORT ${PORT}`)
    })
})