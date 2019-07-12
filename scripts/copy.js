const fs = require('fs-extra');

(async () => {
  await fs.copy('dist', 'functions');
})();
