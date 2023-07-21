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

async function post(url, body) {
  return new Promise((resolve, reject) => {
    let post_body = JSON.stringify(body);
    let data = "";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(post_body),
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

    request.write(post_body);
    request.end();
  });
}

async function Delete(url) {
  return new Promise((resolve, reject) => {
    let data = "";
    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
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

    request.end();
  });
}

async function put(url, body) {
  return new Promise((resolve, reject) => {
    let put_body = JSON.stringify(body);
    let data = "";
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(put_body),
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

    request.write(put_body);
    request.end();
  });
}

module.exports = { post, get, delete: Delete, put };
