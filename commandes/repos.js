"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🔎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/botdep24/Immortal_dragon';
  const img = 'https://files.catbox.moe/ok01oz.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*Hey Pal? You love the bot Right?*\n  
      *Here is all you need to Know*
╭─────────────────
││ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* https://web-vvvf.onrender.com/
││ *𝐑𝐞𝐩𝐨:* ${data.html_url}
││ *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
││ *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
││ *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
││ *𝐔𝐩𝐝𝐚𝐭𝐞𝐝:* ${repoInfo.lastUpdate}
││ *𝐎𝐰𝐧𝐞𝐫:* Sir Antony 
││ *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://whatsapp.com/channel/0029VakcYbvEawdlEwGTtt39
││ *𝐘𝐨𝐮𝐭𝐮𝐛𝐞:* https://youtube.com/@wemacomic
╰─────────────────
          *Immortal Dragon*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
