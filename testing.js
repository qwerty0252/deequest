const dee_api = require("./app");

let x = dee_api.get("http://localhost:4252/api");
x.then((data) => console.log(data));
