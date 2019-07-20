const fs = require('fs-extra');

(async () => {
  await fs.remove('dist');
})();
