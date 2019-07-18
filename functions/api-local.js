const api = require('./api').api;

api.listen(3000, () => {
  console.log(`Node server listening...`);
});
