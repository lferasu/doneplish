import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest : {
    permissions : ['tabs', 'scripting', 'sidePanel'],
    background: { "service_worker": "background.js" },
    side_panel : {
      default_path : "popup.html"
    }
  },
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
});
