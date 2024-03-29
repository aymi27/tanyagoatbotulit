module.exports = {
	config: {
		name: "goiadminv2",
		version: "1.0",
		author: "Cliff",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () {},
	onChat: async function ({ event, message, getLang, api }) {
		const msg = [
			"Wala tulog pa yun! ",
			"My master is currently offline 😢",
			"𝖠𝗇𝗈𝗍𝗁𝖾𝗋 𝗍𝖺𝗀 𝗂𝗇 𝗆𝗒 master, 𝗂 𝗐𝗂𝗅𝗅 𝗉𝗎𝗇𝖼𝗁 𝗒𝗈𝗎 🙂",
			"busy pa ata yun kaya mag-antay ka",
			"Sorry, naka bebetime pa don't disturb her 🙄",
			"Do you like my master thats why your tagging her? Why dont you add him  https://www.facebook.com/100095262681590 😏",
			"Another tag in my master, i will kick your fucking ass"
		];

		const CliffRegex = /^(@yoya 󱢏)$/i;
		if (event.body && CliffRegex.test(event.body)) {
			api.setMessageReaction("😍", event.messageID, (err) => {}, true);
			return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
		}
	},
};
