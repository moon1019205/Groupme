#!/bin/env node
var http, director, bot, router, server, db;
const express, port, path;

port        = process.env.port || 5000
express     = require('express')
bot         = require('./bot.js');
path        = require('path')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function ping() {
  this.res.writeHead(200);
  this.res.end("I am a robot.");
}
