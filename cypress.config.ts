import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "adimunawar-fetest",
    baseUrl: "https://adimunawar-fetest.vercel.app/",
    supportFile: false,
    fixturesFolder: false,
    downloadsFolder: "./tests/cypress/downloads",
    screenshotsFolder: "./tests/cypress/screenshots",
    videosFolder: "./tests/cypress/video",
    specPattern: "./tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: false,
  },
});
