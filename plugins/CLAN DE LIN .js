let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`𝐏𝐎𝐈𝐒𝐎𝐍𝐎𝐔𝐒 𝐕𝐀𝐌𝐏𝐈𝐑𝐄𝐒🇦🇱 ⃝\n\nFormación de Duos\n\nLos usuarios son totalmente aleatorios, los dos usuarios elejidos serán equipo.\n\n• ${toM(a)}\n• ${toM(b)}\n\n• COMANDO EXCLUSIVO PARA 𝐏𝐎𝐈𝐒𝐎𝐍𝐎𝐔𝐒 𝐕𝐀𝐌𝐏𝐈𝐑𝐄𝐒🇦🇱 ⃝🖇\n\n🛑 𝗖𝗔𝗪𝗡𝗔 - 𝗕𝗢𝗧 - 𝗠𝗗 🛑`, null, {
mentions: [a, b]
})}
handler.help = ['formarduo']
handler.tags = ['main', 'fun']
handler.command = ['pvduo','pvduos']
handler.group = true
export default handler