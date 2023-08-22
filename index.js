const express = require('express');
const router = require('./routes');
const app = express();

router(app);

require('./startup/db')();
require('./startup/routes')(app);

const cors = require('cors');
app.use(
    cors({
            origin: '*'
        }));


const port = 8080;
const server = app.listen(port, () => console.log(`http://localhost:${port}`));

module.exports = server;