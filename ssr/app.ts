// // Start up the Node server
import { app } from './server';

const PORT = process.env.PORT || 3000;

// import * as express from 'express';

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
