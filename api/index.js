require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

const router = require('./routes');

// Settings
app.use(express.json());
app.use(express.static(__dirname + '../../build'));

// Routes
router(app);

app.listen(PORT, () => console.log('listening on port ' + PORT));