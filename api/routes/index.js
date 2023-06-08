const express = require('express');
const path = require('path');

const router = (app) => {
  // Blog views
  app.use('/api', (req, res) => res.send('API'))
  app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../../build/index.html')));
}

module.exports = router;