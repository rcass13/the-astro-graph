const express = require('express');
const sequelize = require('./config/connection.js');
const cors = require('cors');
const session = require('express-session');
const api = require('./controller');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const app = express();


const PORT = process.env.PORT || 3001;

const ses = {
    secret: process.env.SESSION_CONFIG_SECRET,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'none'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    
    })
}

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'

}));
app.use(session(ses));
app.use('/', api);
app.use(express.static('public'));



sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`Listening to the PORT ${PORT}`)
    })
})