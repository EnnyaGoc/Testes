const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "app/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // 👈 essa linha é essencial
    baseUrl: "http://localhost:3000", // opcional, mas útil
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
