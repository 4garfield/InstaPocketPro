// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import { join } from 'path';
import * as fs from 'fs-extra';
import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
export const app = express();

app.use(helmet());
app.use(compression());

app.set('etag', 'strong');

const DIST_FOLDER = join(process.cwd(), '.');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

function cacheControl(req, res, next) {
  res.header('Cache-Control', 'max-age=8640000');
  res.header('Vary', 'Origin, User-Agent');
  next();
}
const staticOptions = {
  index: false,
};
// Server static files
app.get('*.*', cacheControl, express.static(join(DIST_FOLDER, 'browser'), staticOptions));

app.get('*', cacheControl, (req, res) => {
  res.render('index', {
    req: req,
    res: res,
    providers: []
  });
});

// catch 404
app.use(function (req, res, next) {
  res.status(404);
  res.json({ msg: 'Request Resource Not Found' });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ msg: err.message });
});
