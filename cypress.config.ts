import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    watchForFileChanges: true,
    retries: {
      openMode: 1,
      runMode: 0
    },
    defaultCommandTimeout: 1000,
    pageLoadTimeout: 20000,
    screenshotsFolder: "cypress/cypress_screenshot",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
