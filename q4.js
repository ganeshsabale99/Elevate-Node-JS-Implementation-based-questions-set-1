// 4. Request Logger Create middleware that logs all incoming HTTP requests with timestamp, method, 
// URL, and response time to a file.


const fs = require("fs");
const path = require("path");
const http = require("http");
const { createServer } = require("http");
const { log } = require("console");