module.exports = {
config: {
  name: "goiadmin",
  aurthor:"?/zed",// Convert By Goatbot Zed
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "love",
  guide: "{pn}"
},
  onStart: async function ({ api, event }) {
  if (event.senderID !== "100095262681590") {
    var aid = ["100095262681590"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't tag admin, she's busy 😗", "Busy pa daw sya 🤧", "Wag mo munang istorbohin, d pa online 😪","Do you like my master thats why your tagging her? 😏"," Another tag in my master, i will punch you 🙂"];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
  };
