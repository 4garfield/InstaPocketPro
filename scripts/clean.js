const fs = require('fs-extra');

(async () => {
  await fs.remove('dist');
  await fs.remove('functions/browser');
  await fs.remove('functions/server');
  await fs.remove('functions/local.js');
  await fs.remove('functions/server.js');
})();
