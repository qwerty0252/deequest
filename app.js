const http = require("http");
const url_parser = require("url");

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

async function post(url, bodyy) {
  return new Promise((resolve, reject) => {
    let body = JSON.stringify(bodyy);
    let data = "";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const request = http.request(url, options, (res) => {
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve(data);
      });
      res.on("error", (error) => {
        reject(error);
      });
    });

    request.on("error", (error) => {
      reject(error);
    });

    request.write(body);
    request.end();
  });
}

test();
module.exports = { post, get };
