import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝐓𝐎𝐑𝐓𝐔𝐑𝐀  𝛺̶  𝗜ꟿ𝐅Σ𝖱𝗡𝗔𝗟ᜓ̷', body: '🩸 ⋮ ＠  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮  ꒱', sourceUrl: `https://www.tiktok.com/@cawna.sex`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
