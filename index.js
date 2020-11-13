const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// initialize middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
const memberRoutes = require('./routes/members.route');

app.use('/api/members', memberRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))