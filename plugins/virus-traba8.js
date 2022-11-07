let handler = async (m, { conn, usedPrefix }) => { 
 var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'] 
 var document = doc[Math.floor(Math.random() * doc.length)]     
 let text = ` 
 🛑 𝗖𝗔𝗪𝗡𝗔 - 𝗕𝗢𝗧 - 𝗠𝗗 🛑

• FUÍ CREADO POR TIAGO.

NÚMERO DE MI CREADOR

👤 wa.me/525511808370

• Sígueme en Instagram @cawna.sex

• SOY EL MEJOR BOT DE WHATSAPP DEL KPOP.
 `.trim()    
 let buttonMessage= { 
 'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }, 
 'mimetype': `application/${document}`, 
 'fileName': `𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死`, 
 'fileLength': 99999999999999, 
 'pageCount': 200, 
 'contextInfo': { 
 'forwardingScore': 200, 
 'isForwarded': true, 
 'externalAdReply': { 
 'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', 
 'mediaType': 2, 
 'previewType': 'pdf', 
 'title': '🔥 EL MEJOR BOT DE WHATSAPP 🔥', 
 'body': wm, 
 'thumbnail': imagen1, 
 'sourceUrl': 'https://www.tiktok.com/@cawna.sex' }}, 
 'caption': text, 
 'footer': wm, 
 'headerType': 6 } 
 conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
 await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m) 
 } 
 handler.help = ['owner', 'creator'] 
 handler.tags = ['info'] 
 handler.command = /^(owner|creator|creador|propietario)$/i 
 export default handler
