require("./endpoints");
const midway = require("testarmada-midway");
midway.start({
  port: 8000,
  host: "localhost",
  mockedDirectory: "./src/mocked-data",
});
