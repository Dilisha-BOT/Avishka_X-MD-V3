const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "pG9lEShY#b6tzGlP2xptfQEidH8F3CMZqzmovMDW7fGH5-TYbH9U",
ALIVE_IMG: process.env.ALIVE_IMG || "https://media-hosting.imagekit.io//ccc2df49e7554b61/Polish_20241126_212137786.jpg?Expires=1733749456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qSLw4LboWeWlts3~MlEjNwY1-0kU1xOEqQ0jILm6qeC6JkHmlo3m4t1hsLwNBGgrY8yIT88ZTvCKE1spvyRKnIGkAATOx-uyJPSgc4-pjKLv9BLsWGkc0637dRk4AJofwn1NonLBbjAs-4WhngZxJgv0ZKbRt7NP5bkRLHWCfeOeM-slj2ncOCWorV-3XIOD9hU2TEeCYsMM~A6RkRVPzXNOHjzv7SCjtEdSTwtCPBVbW97lWq5wr1~1Ds7~gy~36j0s~I00~eazCqwP5Yao~wa~N80bfRivsG2R0EMlykWFxliHwXqaoW9YT5vUlYbBa-YUwZzgYaCv8XCcu8PT~A__",
ALIVE_MSG: process.env.ALIVE_MSG || "┏━━━━━━━━━━━➤◍◉➤\n│ *🔰𝐇𝐞𝐲 𝐈'𝐦 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n┗━━━━━━━━━━━━━━━━━━━━\n━➤◍◉➤\n┏━━━━━━━━━━━➤◍◉➤\n│ *🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰❤️*\n┗━━━━━━━━━━\n━➤◍◉➤\n┏━━━━━━━━━━━➤◍◉➤\n│ *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲|*\n┗━━━━━━━━━━━━━━━━━━━━\n*2024🤍*\n\n┏━━━━━━━━━━━➤◍◉➤\n*This bot is made by Avishka_X technology.This is made with using Ai.You can use this bot easily.New updates will coming*\n┗━━━━━━━━━━━━━━━━━━━━\n\n🔰❤️ *join with us.....* 🔰❤️\nhttps://chat.whatsapp.com/KjDrxhc9b3f7MwmaoraCPC",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94788240417",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
BOT_NAME: process.env.BOT_NAME || "➺Avishka_X-MD࿐",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
ANTI_LINK:process.env.ANTI_LINK || "true",
ANTI_BAD:process.env.ANTI_BAD || "true",
ANTI_BOT:process.env.ANTI_BOT || " true"
};
