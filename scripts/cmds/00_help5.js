const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "▀▀█▀▀ █▀▀█ █▀▀▄ █░░█ █▀▀█\n ░░█░░ █▄▄█ █░░█ █▄▄█ █▄▄█\n ░░▀░░ ▀░░▀ ▀░░▀ ▄▄▄█ ▀░░▀\n\n﹝ 🧜‍♀️ | 𝗧𝗔𝗡𝗬𝗔  ﹞";

module.exports = {
	config: {
		name: "help",
		version: "1.17",
		author: "🍨𝗬𝗢𝗬𝗔🧜‍♀", // orginal author Kshitiz
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "View command usage",
		},
		longDescription: {
			en: "View command usage and list all commands directly",
		},
		category: "info",
		guide: {
			en: "{pn} / help cmdName ",
		},
		priority: 1,
	},

	onStart: async function ({ message, args, event, threadsData, role }) {
	const { threadID } = event;
	const threadData = await threadsData.get(threadID);
	const prefix = getPrefix(threadID);

	if (args.length === 0) {
			const categories = {};
			let msg = "";

			msg += `▀▀█▀▀ █▀▀█ █▀▀▄ █░░█ █▀▀█\n ░░█░░ █▄▄█ █░░█ █▄▄█ █▄▄█\n ░░▀░░ ▀░░▀ ▀░░▀ ▄▄▄█ ▀░░▀\n\n﹝ 🧜‍♀️ | 𝗧𝗔𝗡𝗬𝗔  ﹞`;

			for (const [name, value] of commands) {
					if (value.config.role > 1 && role < value.config.role) continue;

					const category = value.config.category || "Uncategorized";
					categories[category] = categories[category] || { commands: [] };
					categories[category].commands.push(name);
			}
8
			Object.keys(categories).forEach(category => {
					if (category !== "info") {
							msg += `\n╭────────────〘🧜‍♀️〙\n│『 ${category.toUpperCase()} 』`;

							const names = categories[category].commands.sort();
							for (let i = 0; i < names.length; i += 1) {
									const cmds = names.slice(i, i + 1).map(item => `│🎀${item}🎀`);
									msg += `\n${cmds.join(" ".repeat(Math.max(0, 5 - cmds.join("").length)))}`;
							}

							msg += `\n╰────────〘🧜‍♀️〙`;
					}
			});

			const totalCommands = commands.size;
			msg += `\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆, 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗵𝗮𝘀 ${totalCommands} 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝘁𝗵𝗮𝘁 𝗰𝗮𝗻 𝗯𝗲 𝘂𝘀𝗲𝗱\n`;
			msg += `𝗧𝘆𝗽𝗲 ${prefix} 𝗵𝗲𝗹𝗽 𝗰𝗺𝗱𝗡𝗮𝗺𝗲 𝘁𝗼 𝘃𝗶𝗲𝘄 𝘁𝗵𝗲 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗼𝗳 𝘁𝗵𝗮𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱\n`;
			msg += `    █▓▒­░⡷🧜‍♀️𝗧𝗔𝗡𝗬𝗔🧜‍♀️⢾░▒▓█`;


			const helpListImages = [
				"https://i.imgur.com/8d6WbRJ.gif"
			];


			const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];


			await message.reply({
					body: msg,
					attachment: await global.utils.getStreamFromURL(helpListImage)
			});
	} else {
			const commandName = args[0].toLowerCase();
			const command = commands.get(commandName) || commands.get(aliases.get(commandName));

			if (!command) {
				await message.reply(`Command "${commandName}" not found.`);
			} else {
				const configCommand = command.config;
				const roleText = roleTextToString(configCommand.role);
				const author = configCommand.author || "Unknown";

				const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

				const guideBody = configCommand.guide?.en || "No guide available.";
				const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

				const response = `╭▬▬〘🧜‍♀️𝗡𝗔𝗠𝗘🧜‍♀️〙▬▬🍥✨
	▮ ${configCommand.name}
	▮▬▬▬〘✨🍥𝗜𝗡𝗙𝗢🍥✨〙▬▬▬
	▮ 🧜‍♀️𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡: ${longDescription}
	▮ 🧜‍♀️𝗢𝗧𝗛𝗘𝗥 𝗡𝗔𝗠𝗘𝗦: ${configCommand.aliases ? configCommand.aliases.join(", ") : "𝙳𝙾 𝙽𝙾𝚃 𝙷𝙰𝚅𝙴"}
	▮ 🧜‍♀️𝗢𝗧𝗛𝗘𝗥 𝗡𝗔𝗠𝗘𝗦 𝗜𝗡 𝗬𝗢𝗨𝗥 𝗚𝗥𝗢𝗨𝗣: Do not have
	▮ 🧜‍♀️𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${configCommand.version || "1.0"}
	▮ 🧜‍♀️𝗥𝗢𝗟𝗘: ${roleText}
	▮ 🧜‍♀️𝗧𝗜𝗠𝗘 𝗣𝗘𝗥 𝗖𝗠𝗗: ${configCommand.countDown || 1}s
	▮ 🧜‍♀️𝗔𝗨𝗧𝗛𝗢𝗥: ${author}
	▮▬▬▬〘✨🍥𝗨𝗦𝗔𝗚𝗘🍥✨〙▬▬▬
	▮ ${usage}
	▮▬▬▬〘✨🍥𝗡𝗢𝗧𝗘𝗦🍥✨〙▬▬▬
	▮ The content inside <XXXXX> can be changed
	▮ The content inside [a|b|c] is a or b or c
	╰▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬🍥✨`;

				await message.reply(response);
			}
		}
	},
};

function roleTextToString(roleText) {
	switch (roleText) {
		case 0:
			return "0 (All users)";
		case 1:
			return "1 (Group administrators)";
		case 2:
			return "2 (Admin bot)";
		default:
			return "Unknown role";
	}
}
