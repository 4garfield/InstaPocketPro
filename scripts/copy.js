const fs = require('fs-extra');

(async () => {
  await fs.copy('functions', 'dist');
})();
