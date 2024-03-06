const express = require('express');
const seeders = require('../src/database/seeders/index');
const tasksRoutes = require('./routes/tasksRoutes');
const statusRoutes = require('./routes/statusRoutes');
const priorityRoutes = require('./routes/priorityRoutes');

require('dotenv').config();

const app = express();

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
