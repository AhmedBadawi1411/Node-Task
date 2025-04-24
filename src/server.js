const { app } = require("./app");
const serverless = require("serverless-http");
// app.listen(3000, () => {
//   console.log("Server is running on : http://localhost:3000");
// });

module.exports = serverless(app);
