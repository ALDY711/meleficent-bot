import { fbdl } from '../../lib/download.js';
export default {
   names: ['Downloader'],
   tags: ['facebook'],
   command: ['fb', 'facebook', 'fbdl'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukan link facebook nya! \nContoh: ${prefix+command} https://www.facebook.com/100070546388418/posts/pfbid0279knMA1reA28n52rKTDmDW1wMa88afUHZMGNapEUJQ1bRbQcYMfBaeHz4nhhzNTUl/`);
      m.adReply(loading, setting.thumbnail, m.chat)
      let { video } = await fbdl(text)
      conn.sendFile(m.chat, video, {
         caption: `${javi} 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊`,
         quoted: m
      })
   },
   limit: 5,
   premium: false
};