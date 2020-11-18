const path = require("path");

module.exports = (app) => {
    // return the index.html page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public.index.html"))
    });
    // return the exercise.html page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    // return the stats.html page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}