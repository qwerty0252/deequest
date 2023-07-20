const http = require("http");

async function get(url) {
  return new Promise((resolve, reject) => {
    let data = "";
    const request = http.request(new URL(`${url}`), (res) => {
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve(data);
      });
    });

    request.on("error", (error) => {
      reject(error);
    });

    request.end();
  });
}

exports.get = get;
