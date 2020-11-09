const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Bundler = require("parcel-bundler");
const morgan = require("morgan");
const bundler = new Bundler('./public/index.html');

const dotenv = require('dotenv');
dotenv.config();

// API routes
const Routes = require('./api/routes/routes');
const MessageRoutes = require('./api/routes/messages');

const cors = require("cors");
app.use(cors());

const http = require("http");
const server = http.Server(app);

const MONGODB_URI = process.env.MONGODB_ATLAS_URI || 'mongodb://localhost:27017/mern-stack';

// MongoDB connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// API routes
app.use('/api', Routes);
app.use('/api/messages', MessageRoutes);

app.use(bundler.middleware());

app.use(express.static('./dist'));
app.get('/', (req, res) => {
    res.sendFile('./dist/index.html');
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Application is running on port', PORT);
});
