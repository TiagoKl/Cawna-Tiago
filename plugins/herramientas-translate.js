import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[βππππβ] πππΎ π²πΎπππ΄π²ππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command} (idioma) (texto)*\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} es Hello*\n\n*π²πΎπ½πΎπ²π΄ π»πΎπ πΈπ³πΈπΎπΌπ°π π°π³πΌπΈππΈπ³πΎπ π΄π½:*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, { tld, to: lang, })
} catch {
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
result = loll.result.translated
} finally {
m.reply('*TraducciΓ³n:* ' +  result) }}
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
