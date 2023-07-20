const http = require("http");
const url_parser = require("url");

const url = "http://localhost:4252/ap";
let body = { me: "chinaza" };
let data = "";
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(JSON.stringify(body)),
  },
};
// console.log(options);

const request = http.request(url, options, (res) => {
  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log("chunk");
    data += chunk;
  });

  res.on("end", () => {
    console.log("done");
    console.log(`data: ${data}`);
    // resolve(data);
  });
  res.on("error", (error) => {
    // reject(error);
    console.log(error);
  });
});

request.on("error", (error) => {
  //   reject(error);
  console.log(error);
});

request.write(JSON.stringify(body));
request.end();
