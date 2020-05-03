require('./config/config')

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('./routes/index'));
// parse application/json
app.use(bodyParser.json())


//show web page
// app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(process.env.PORT, () => {
    console.log(`listening in port ${process.env.PORT}`)
})

