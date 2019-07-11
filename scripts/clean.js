const fs = require('fs-extra');

(async () => {
  await fs.remove('dist/browser/');
  await fs.remove('dist/server/');
})();
