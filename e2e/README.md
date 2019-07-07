# E2E

## WebDriver

To manually update webdriver: `webdriver-manager update --versions.chrome 75.0.3770.90`.

## Protractor 6 Offline

To use protractor 6 in offline mode, you can follow below steps:

1. download [chromedriver](http://chromedriver.chromium.org/downloads) for your chrome version.

2. Copy below as `chromedriver.config.json` and placed in `node_modules/protractor/node_modules/webdriver-manager/downloads`:

```json
{
  "last": "{{chrome_driver_absolute_path}}",
  "all": ["{{chrome_driver_absolute_path}}"]
}
```
