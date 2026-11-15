
// ==================================
// 👑 KING BOT - FICHIER PRINCIPAL
// ==================================

require("dotenv").config();

const express = require("express");

// Importation des commandes
const { executeCommand } = require("./commandes");

const app = express();

// Configuration
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ==================================
// PAGE D'ACCUEIL
// ==================================

app.get("/", (req, res) => {
    res.send(`
        <h1>👑 KING BOT</h1>
        <p>Bienvenue sur KING BOT !</p>
        <p>Statut : En ligne 🚀</p>
    `);
});

// ==================================
// VÉRIFICATION DU BOT
// ==================================

app.get("/health", (req, res) => {
    res.json({
        bot: "KING BOT",
        status: "online",
        version: "1.0.0"
    });
});

// ==================================
// EXÉCUTION DES COMMANDES
// ==================================

app.post("/test-command", (req, res) => {
    try {
        const message = req.body.message;

        if (!message) {
            return res.status(400).json({
                success: false,
                response: "Veuillez envoyer une commande."
            });
        }

        const response = executeCommand(message);

        res.json({
            success: true,
            bot: "KING BOT",
            response: response
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            response: "Une erreur est survenue."
        });
    }
});

// ==================================
// GESTION DES ERREURS
// ==================================

app.use((req, res) => {
    res.status(404).json({
        error: "Page introuvable"
    });
});

// ==================================
// DÉMARRAGE DU SERVEUR
// ==================================

app.listen(PORT, () => {
    console.log("👑 KING BOT démarré !");
    console.log(`Serveur actif sur le port ${PORT}`);
});
