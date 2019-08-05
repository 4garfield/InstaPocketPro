const api = require('./api').api;

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
