hereconst commands = {
    menu: "👑 KING BOT\n\n" +
          "🤖 INTELLIGENCE ARTIFICIELLE\n" +
          ".ai\n.ask\n.translate\n.correct\n\n" +

          "📸 PHOTOS ET VIDÉOS\n" +
          ".sticker\n.toimg\n.blur\n.meme\n\n" +

          "📚 MANGA ET ANIME\n" +
          ".manga\n.anime\n.mangainfo\n.character\n\n" +

          "🎵 MUSIQUE\n" +
          ".play\n.lyrics\n.songinfo\n\n" +

          "👥 GROUPES\n" +
          ".tag\n.tagall\n.groupinfo\n.welcome\n\n" +

          "🎮 JEUX\n" +
          ".quiz\n.riddle\n.dice\n.tictactoe\n\n" +

          "⚙️ OUTILS\n" +
          ".calc\n.time\n.date\n.weather\n.qr\n\n" +

          "👑 ADMINISTRATION\n" +
          ".help\n.owner\n.ping\n.stats",

    ping: "👑 KING BOT fonctionne !",

    help: "Bienvenue dans KING BOT ! Tape .menu pour voir les commandes.",

    time: () => new Date().toLocaleTimeString("fr-FR"),

    date: () => new Date().toLocaleDateString("fr-FR")
};

function executeCommand(input) {
    const command = input.trim().toLowerCase().replace(/^\./, "");

    if (commands[command]) {
        return typeof commands[command] === "function"
            ? commands[command]()
            : commands[command];
    }

    return "❌ Commande inconnue. Tape .menu";
}

module.exports = { executeCommand };
