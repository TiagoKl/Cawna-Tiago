let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`πππππππππ πππππππππ¦π± β\n\nFormaciΓ³n de Duos\n\nLos usuarios son totalmente aleatorios, los dos usuarios elejidos serΓ‘n equipo.\n\nβ’ ${toM(a)}\nβ’ ${toM(b)}\n\nβ’ COMANDO EXCLUSIVO PARA πππππππππ πππππππππ¦π± βπ\n\nπ πππͺπ‘π - ππ’π§ - π π π`, null, {
mentions: [a, b]
})}
handler.help = ['formarduo']
handler.tags = ['main', 'fun']
handler.command = ['pvduo','pvduos']
handler.group = true
export default handler