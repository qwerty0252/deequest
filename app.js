const http = require("http");

function req() {
  const options = {
    hostname: "localhost",
    port: "4252",
    path: "/api",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let data = "";

  const request = http.request(options, (res) => {
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
}

exports.req = req;
