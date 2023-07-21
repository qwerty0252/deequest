const http = require("http");
const yargs = require("yargs");

const argv = yargs
  .option("get", {
    alias: "g",
    describe: "get method",
  })
  .option("post", {
    alias: "p",
    describe: "post method",
  })
  .option("delete", {
    alias: "d",
    describe: "delete method",
  })
  .option("put", {
    alias: "pt",
    describe: "put method",
  })
  .option("url", {
    alias: "u",
    describe: "request url",
    demandOption: true,
  })
  .option("body", {
    alias: "b",
    describe: "data to be sent",
  })
  .help().argv;

const arg_get = argv.get;
const arg_post = argv.post;
const arg_delete = argv.delete;
const arg_put = argv.put;
const arg_url = argv.url;
const arg_body = argv.body;

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

//This probably isn't the best way to this. But rn I'm brain dead. I'll think of a fancy way to this later
if (arg_get) {
  get(arg_url).then((res) => console.log(`response: ${res}`));
} else if (arg_post) {
  post(arg_url, arg_body).then((res) => console.log(`response: ${res}`));
} else if (arg_delete) {
  Delete(arg_url).then((res) => console.log(`response: ${res}`));
} else if (arg_put) {
  put(arg_url, arg_body).then((res) => console.log(`response: ${res}`));
}

module.exports = { post, get, delete: Delete, put };
