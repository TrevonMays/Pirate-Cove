const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const colors = require('colors');
colors.enable();

const cors = require('cors');
app.use(express.json(), cors());

// middleware
const connectDb = require('./server/config/mongoose.config');
connectDb();

const PirateRouter = require('./server/routes/pirate.routes');
app.use('/api/Pirates', PirateRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>
    console.log(colors.rainbow(`Listening on port: ${server.address().port}`))
);
