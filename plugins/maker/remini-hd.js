export default {
   names: ['Maker'],
   tags: ['remini', 'hd'],
   command: ['remini', 'hd', 'hdr'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted,
      Format,
      isOwner
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage') {
         if (!quoted) return m.reply(`Balas Atau Kirim image dengan caption ${prefix + command}`)
         m.react('🕒', m.chat);
         let content = await conn.downloadAndSaveMediaMessage(quoted);
         m.adReply(mess.wait, setting.thumbnail, m.chat);
         let ran = await Format.getRandom('.png');
         let data = await Format.HD2(content, ran);         
         conn.sendFile(m.chat, data, {
            caption: star + ' Berhasil Di Tingkatkan',
            quoted: m
         })
      } else {
         m.reply(`Balas Atau Kirim image dengan caption ${prefix+command}`)
      }
   },
   limit: 8,//banyakin limitnya ke enakan usernya nanti kalo limit kecil kan bisa beli premium usernya ke elu :)
   premium: false,
   disable: false
};
