const express = require('express')
const app = express();
const auth = require('./auth')
const actors = require('./actors')
const episodes = require('./episodes')
const genres = require('./genres')
const shows = require('./shows')
const subscriptions = require('./subscriptions')
const users = require('./users')
const notifications = require('./notifications')
const favourites = require('./favourites')
const comments = require('./comments')


app.use('/auth', auth);
app.use('/actors', actors);
app.use('/episodes', episodes);
app.use('/genres', genres);
app.use('/shows', shows);
app.use('/subscriptions', subscriptions);
app.use('/users', users);
app.use('/notifications', notifications);
app.use('/favourites', favourites);
app.use('/comments', comments);

module.exports = app;