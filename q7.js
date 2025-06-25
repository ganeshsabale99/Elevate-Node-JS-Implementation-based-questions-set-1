// Express.js Questions
// 7. Error Handling Middleware Write a global error handler that catches all errors, 
// logs them, and returns appropriate JSON responses based on error type.


const express = require("express");
const app = express();


app.use((req, res, next) => {
        const error = new Error("Not Found");
        error.status = 404;
        next(error);
    });
    
    app.use((error, req, res, next) => {
        res.status(error.status || 500).json({ error: error.message });
    });
    
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
    
    module.exports = app;
