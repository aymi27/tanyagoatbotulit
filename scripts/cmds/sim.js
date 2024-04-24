const fs = require("fs");
const similarity = require("similarity");

module.exports = {
  config: {
    name: "sim",
    version: "1.0",
    author: "Deku/kira",
    usages: "cain [text]",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "talk to sim"
    },
    longDescription: {
      en: "talk to simsimi"
    },
    category: "box chat",
    guide: {
      en: "{p}sim your ask"
    }
  },

  onStart: async function ({ api, event, args }) {
    const path = 'scripts/cmds/others/sim.json'; // Changed path here

    if (!fs.existsSync(path)) return api.sendMessage("Sim data not found", event.threadID, event.messageID);

    const data = JSON.parse(fs.readFileSync(path));
    const question = args.join(" ");

    if (!question) return api.sendMessage("╭┈ ❒ 𝘂𝘀𝗮𝗴𝗲 :\n╰┈➤ Type: sim [text]", event.threadID, event.messageID);

    let bestMatch = "";
    let highestScore = 0;

    for (const key in data) {
      const score = similarity(question, key);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = key;
      }
    }

    if (highestScore < 0.5) return api.sendMessage("I don't have an answer for that question, kindly teach me :>", event.threadID, event.messageID);

    const responses = data[bestMatch];
    const response = responses[Math.floor(Math.random() * responses.length)];

    api.sendMessage(response, event.threadID, event.messageID);
  }
};