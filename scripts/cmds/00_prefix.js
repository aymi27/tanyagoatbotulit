module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█\n█▄█ ▄▀█ █▄░█ █\n  
░█░ █▀█ █░▀█ █  \n〘🍏〙𝙷𝙴𝙻𝙻𝙾 𝚃𝙷𝙸𝚂 𝙸𝚂 𝚃𝙰𝙽𝚈𝙰!✨\n〘🍏〙𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ► 〘 𝗬𝗢𝗬𝗔 ◉ 𝗔𝗬𝗠𝗜 〙\n\n〘🍏〙𝚃𝙷𝙸𝚂 𝙸𝚂 𝙼𝚈 𝙿𝚁𝙴𝙵𝙸𝚇 𝙻𝙾𝚅𝙴 ► 》!《\n
〘✨🍏𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨🍏✨〙
〘🍏〙 !𝗁𝖾𝗅𝗉 [𝗇𝗎𝗆𝖻𝖾𝗋 𝗈𝖿 𝗉𝖺𝗀𝖾] -> 𝗌𝖾𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌
〘🍏〙 !𝗌𝗂𝗆 [𝗆𝖾𝗌𝗌𝖺𝗀𝖾] -> 𝗍𝖺𝗅𝗄 𝗍𝗈 𝖻𝗈𝗍
〘🍏〙 !𝖼𝖺𝗅𝗅𝖺𝖽 [𝗆𝖾𝗌𝗌𝖺𝗀𝖾] -> 𝗋𝖾𝗉𝗈𝗋𝗍 𝖺𝗇𝗒 𝗉𝗋𝗈𝖻𝗅𝖾𝗆 𝖾𝗇𝖼𝗈𝗎𝗇𝗍𝖾𝗋𝖾𝖽
〘🍏〙 !help [command] -> 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗎𝗌𝖺𝗀𝖾 𝗈𝖿 𝖼𝗈𝗆𝗆𝖺𝗇𝖽\n\n𝖧𝖺𝗏𝖾 𝖿𝗎𝗇 𝗎𝗌𝗂𝗇𝗀 𝗂𝗍 𝖾𝗇𝗃𝗈𝗒!🍏✨\n〘🍏〙𝗖𝗥𝗘𝗔𝗧𝗢𝗥: https://www.facebook.com/100095262681590`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/M4luPbE.gif")
 });
 }
 }
}
