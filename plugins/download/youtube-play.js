const fetch = require('node-fetch');
const { ytmp3, ytsearch } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['play', 'song', 'lagu'],
   command: ['play', 'song', 'lagu'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Masukan Lagu Yang Ingin Di Cari\ncontoh ${prefix+command} papinka sana sini aku rindu atau .play linknya https://youtu.be/A5Jj6Ib91zA`);
      const vid = (await ytsearch(text)).video[0]
      const { title, description, videoId, durationH, viewH, publishedTime } = vid; 
      if (!vid) return m.reply('Tidak di temukan, coba untuk membalikkan judul dan author nya');
      const url = 'http://youtu.be/' + videoId;
      let play = `🎧 〔 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 〕\n`
      play += ` ${javi} *Data Di Temukan*\n`
      play += ` ⬡ Judul: ${title}\n`
      play += ` ⬡ Durasi: ${durationH}\n`
      play += ` ⬡ Views: ${viewH}\n`
      play += ` ⬡ Upload: ${publishedTime}\n`
      play += ` ⬡ Link: ${url}\n\n`
      play += ` *Loading audio sedang dikirim...*`
      conn.sendFile(m.chat, `https://i.ytimg.com/vi/${videoId}/0.jpg`, play, m);
      const { audio } = await ytmp3(url);
      const pretty = await Format.mp3Play(audio);
      conn.sendFile(m.chat, pretty, title, m);
   },
   limit: 3
}