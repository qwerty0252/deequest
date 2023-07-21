#! /usr/bin/env node

const yargs = require("yargs");
const { post, get, put, Delete } = require("..");

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
