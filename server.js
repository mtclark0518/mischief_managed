const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const routes = require('./backend/config/routes')
const {Client} = require('pg')
const PORT = process.env.PORT || 1979
const log = (stuff) => console.log(stuff)


const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect( (error) => {
	if (error) { log('error yo: ', error) } else { log('connected to db') }
});

//body-parser functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => log('Shakedown ' + PORT));
