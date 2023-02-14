const express = require('express');
const sequelize = require('./config/connection.js');
const cors = require('cors');

const api = require('./controller');



const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'

}));
app.use('/', api);


sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`Listening to the PORT ${PORT}`)
    })
})