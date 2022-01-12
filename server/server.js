import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import reactDomServer from 'react-dom/server';
import basicAuth from 'express-basic-auth';
import cookieParser from 'cookie-parser';
import { StaticRouter } from "react-router";
import createLocaleMiddleware from 'express-locale';
import bodyParser from 'body-parser';
import App from '../src/components/content/App';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(createLocaleMiddleware());
app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));

const auth = basicAuth({
  users: {
    'admin@carly.com': 'password1',
    'user@carly.com': 'password2',
  },
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());

app.use(function(req, res, next){
  var match = req.url.match(/^\/([A-Z]{2})([\/\?].*)?$/i);
  if (match){
      req.lang = match[1];
      req.url = match[2] || '/';
  }
  next();
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('name').end();
});

app.get('/get-data', (req, res) => {
  if (req.signedCookies.name === 'admin') {
    res.send({message: 'admin'});
  } else if (req.signedCookies.name === 'user') {
    res.send({message: 'user'});
  } else {
    res.end();
  }
});

app.post('/authenticate', (req, res) => {
  const auth = req.body.auth;
  const options = {
    httpOnly: true,
    signed: true,
  };
  if (auth?.username === 'admin@carly.com') {
    res.cookie('name', 'admin', options).send({ message: 'Admin authorized' });
  } else if (auth?.username === 'user') {
    res.cookie('name', 'user', options).send({ message: 'User authorized' });
  }
  // res.send({message: 'User Not Found'})
});

app.get('*', (req, res) => {
  console.log(req.signedCookies, 'cookies');
  console.log(req.auth, 'body')
  const context= {};
  const app = reactDomServer.renderToString(<StaticRouter location={req.url} context={context}><App/></StaticRouter>);
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log("Appp launched")
})