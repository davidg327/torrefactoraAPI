const express = require('express');
const morgan = require('morgan');
const seeders = require('../src/database/seeders/index');
const tasksRoutes = require('./routes/tasksRoutes');
const statusRoutes = require('./routes/statusRoutes');
const priorityRoutes = require('./routes/priorityRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

// Configura morgan para que registre las solicitudes HTTP
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/tasks', tasksRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/priority', priorityRoutes);

app.listen(port, () => {
    console.log(`Serve on port ${port}`);
});


/*(async () => {
    try {
        await seeders();
    } catch (error) {
        console.error('Error al realizar la migración:', error);
    }
})();*/
