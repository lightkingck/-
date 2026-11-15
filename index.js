hererequire("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Accueil du bot
app.get("/", (req, res) => {
    res.send("👑 KING BOT est en ligne !");
});

// Vérifier le fonctionnement
app.get("/health", (req, res) => {
    res.json({
        bot: "KING BOT",
        status: "online"
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log("👑 KING BOT démarré !");
});
