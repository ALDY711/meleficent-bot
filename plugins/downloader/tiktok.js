import { ttdl, fbdl } from '../../lib/download.js'
export default {
   names: ['Downloader'],
   tags: ['tiktok', 'titit'],
   command: ['tt', 'tiktok', 'ttdl', 'titit', 'ttnowm'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      try {
         if (!text) return m.reply(`Masukan Tiktok contoh\n${prefix+command}` + ' https://vm.Tiktok.com/ZSNYfYdLj/')
         let { title, name, username, published, like, comment, share, views, bookmark, video, duration } = await ttdl(text)
         m.adReply(loading, setting.thumbnail, m.chat)
         let Tiktok = ` ${javi} 𝐓𝐈𝐊𝐓𝐎𝐊\n`
         Tiktok += ` ⭔ Name : ${name}\n`
         Tiktok += ` ⭔ Judul : ${title}\n`
         Tiktok += ` ⭔ User Name : ${username}\n`
         Tiktok += ` ⭔ Published : ${published}\n`
         Tiktok += ` ⭔ Like : ${like}\n`
         Tiktok += ` ⭔ Comment : ${comment}\n`
         Tiktok += ` ⭔ Share : ${share}\n`
         Tiktok += ` ⭔ Views : ${views}\n`
         Tiktok += ` ⭔ Bookmark : ${bookmark}\n`
         Tiktok += ` ⭔ Duration : ${duration}`
         conn.sendFile(m.chat, video, {
            caption: Tiktok,
            quoted: m
         })
      } catch {
         let { video } = await fbdl(text)
         conn.sendFile(m.chat, video, {
            caption: `𝐓𝐈𝐊𝐓𝐎𝐊`,
            quoted: m
         })
      }
   },
   limit: 3,
   premium: false
};