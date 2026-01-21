import { add } from "./custommode.js";
import http from "node:http";
import express from "express";
// const http = require("http");


const app = express();
// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.write("Welcome to the Home Page!");
//     res.end();
//   } else if (req.url === "/about" && req.method === "GET") {
//     res.write("About Page");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });
//Reading a File Synchronously
// const fs = require("fs");
 
// const data = fs.readFileSync("data.txt", "utf8");
// console.log(data);


//Reading  a file asynchronously
// const ft = require("fs");
 
// ft.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//     console.log("this is reading file asynchronously")
//   console.log(data);
// });


// 
// const fa = require("fs/promises");
 
// async function readFile() {
//   const data = await fa.readFile("data.txt", "utf8");
//   console.log("this is promises")
//   console.log(data);
// }
 
// readFile();

app.get("/",(req, res) => {
    res.send("hello my name is tisa how are you doing today");
})

const result = add(2, 3);
console.log(result); // 5

app.listen(3000, () => {
  console.log("Server running on port 3000");
});