// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/features/**/*.feature",

//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature", //feature files path
    defaultCommandTimeout: 5000,                      // def timeout for all specs
    
    step_Definitions: [
            "cypress/e2e/step_definitions/**/*.js" //step def files path 
        ],

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
