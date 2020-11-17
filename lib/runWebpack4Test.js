const childProcess = require("child_process");
const runWebpackTest = require("./helpers/runWebpackTest");
childProcess.execSync(`yarn add webpack@4 webpack-cli@4`, { stdio: "inherit" });

runWebpackTest().catch((err) => console.error(err));