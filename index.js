
require("dotenv").config();

const express = require("express");
const { executeCommand } = require("./commands");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("👑 KING BOT est en ligne !");
});

app.get("/health", (req, res) => {
    res.json({
        bot: "KING BOT",
        status: "online"
    });
});

app.post("/test-command", (req, res) => {
    const message = req.body.message || "";
    const response = executeCommand(message);

    res.json({ response });
});

app.listen(PORT, () => {
    console.log("👑 KING BOT démarré !");
});
