import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 ✨${taguser}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴 𝙼𝚈𝚂𝚃𝙸𝙲 - 𝙱𝙾𝚃 💖彡*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}
${readMore}
*<𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋/>*

° ඬ ⃟ 💟 _${usedPrefix}grupos_
° ඬ ⃟ 💟 _${usedPrefix}estado_
° ඬ ⃟ 💟 _${usedPrefix}infobot_
° ඬ ⃟ 💟 _${usedPrefix}speedtest_
° ඬ ⃟ 💟 _${usedPrefix}donar_
° ඬ ⃟ 💟 _${usedPrefix}grouplist_
° ඬ ⃟ 💟 _${usedPrefix}owner_
° ඬ ⃟ 💟 _${usedPrefix}script_
° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*<𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆/>*

° ඬ⃟👽 _${usedPrefix}join *<enlace / link / url>*_

*<𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋/>*

° ඬ⃟🤖 _${usedPrefix}serbot_
° ඬ⃟🤖 _${usedPrefix}stop_
° ඬ⃟🤖 _${usedPrefix}bots_

🩸   𝐗𝕏𝗫  : 𝗝𝗨𝗘𝗚𝗢𝗦 𓊈🎖️𓊉

 ° 🎖️ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
 ° 🎖️ ${usedPrefix}ppt <papel / tijera /piedra>
 ° 🎖️ ${usedPrefix}prostituto <nombre / @tag>
 ° 🎖️ ${usedPrefix}prostituta <nombre / @tag>
 ° 🎖️ ${usedPrefix}gay2 <nombre / @tag>
 ° 🎖️ ${usedPrefix}lesbiana <nombre / @tag>
 ° 🎖️ ${usedPrefix}pajero <nombre / @tag> 
 ° 🎖️ ${usedPrefix}pajera <nombre / @tag>
 ° 🎖️ ${usedPrefix}puto <nombre / @tag>
 ° 🎖️ ${usedPrefix}puta <nombre / @tag>
 ° 🎖️ ${usedPrefix}manco <nombre / @tag>
 ° 🎖️ ${usedPrefix}manca <nombre / @tag>
 ° 🎖️ ${usedPrefix}rata <nombre / @tag>
 ° 🎖️ ${usedPrefix}love <nombre / @tag>
 ° 🎖️ ${usedPrefix}doxear <nombre / @tag>
 ° 🎖️ ${usedPrefix}pregunta <texto>
 ° 🎖️ ${usedPrefix}suitpvp <@tag> 
 ° 🎖️ ${usedPrefix}slot <apuesta> 
 ° 🎖️ ${usedPrefix}ttt <nombre sala> 
 ° 🎖️ ${usedPrefix}delttt
 ° 🎖️ ${usedPrefix}simi <texto>
 ° 🎖️ ${usedPrefix}top <texto>
 ° 🎖️ ${usedPrefix}topgays
 ° 🎖️ ${usedPrefix}topotakus
 ° 🎖️ ${usedPrefix}formarpareja
 ° 🎖️ ${usedPrefix}verdad
 ° 🎖️ ${usedPrefix}reto
 ° 🎖️ ${usedPrefix}cancion
 ° 🎖️ ${usedPrefix}pista

🩸   𝐗𝕏𝗫  : 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 𓊈🎖️𓊉

 ° 📥 _{usedPrefix}instagram <enlace / link / url>
 ° 📥 ${usedPrefix}mediafire <enlace / link / url>
 ° 📥 ${usedPrefix}instagram <enlace / link / url>
 ° 📥 ${usedPrefix}gitclone <enlace / link / url> 
 ° 📥 ${usedPrefix}stickerpack <enlace / link / url>
 ° 📥 ${usedPrefix}gdrive <enlace / link / url> 
 ° 📥 _${usedPrefix}tiktok enlace / link / url>
 ° 📥 ${usedPrefix}xnxxdl <enlace / link / url>
 ° 📥 ${usedPrefix}xvideosdl <enlace / link / url> 
 ° 📥 ${usedPrefix}fb <enlace / link / url>
 ° 📥 ${usedPrefix}fb2 <enlace / link / url> 
 ° 📥 ${usedPrefix}fb3 <enlace / link / url> 
 ° 📥 ${usedPrefix}fb4 <enlace / link / url>
 ° 📥 ${usedPrefix}fb5 <enlace / link / url>
 ° 📥 ${usedPrefix}ytmp3 <enlace / link / url>
 ° 📥 ${usedPrefix}ytmp4 <enlace / link / url>
 ° 📥 ${usedPrefix}ytmp3doc <enlace / link / url>
 ° 📥 ${usedPrefix}ytmp4doc <enlace / link / url> 
 ° 📥 ${usedPrefix}play.1 <texto / enlace / link / url> 
 ° 📥 ${usedPrefix}play.2 <texto / enlace / link / url>
 ° 📥 ${usedPrefix}play <texto> 
 ° 📥 ${usedPrefix}playdoc <texto>
 ° 📥 ${usedPrefix}playlist <texto>
 ° 📥 ${usedPrefix}playlist2 <texto>
 ° 📥 ${usedPrefix}spotify <texto> 
 ° 📥 ${usedPrefix}ringtone <texto>
 ° 📥 ${usedPrefix}soundcloud <texto>
 ° 📥 ${usedPrefix}imagen <texto>
 ° 📥 ${usedPrefix}pinteret <texto>
 ° 📥 ${usedPrefix}wallpaper <texto> 
 ° 📥 ${usedPrefix}wallpaper2 <texto> 
 ° 📥 ${usedPrefix}pptiktok <nombre de usuario> 
 ° 📥 ${usedPrefix}igstalk 
<nombre de usuario>
 ° 📥 ${usedPrefix}igstory <nombre de usuario>
 ° 📥 ${usedPrefix}tiktokstalk <nombre de usuario>

*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

° ඬ⃟💎 _${usedPrefix}add *<numero>*_
° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
° ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
° ඬ⃟💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}infogroup_
° ඬ⃟💎 _${usedPrefix}resetlink_
° ඬ⃟💎 _${usedPrefix}link_
° ඬ⃟💎 _${usedPrefix}setname *<texto>*_
° ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
° ඬ⃟💎 _${usedPrefix}invocar *<texto>*_
° ඬ⃟💎 _${usedPrefix}setwelcome *<texto>*_
° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_
° ඬ⃟💎 _${usedPrefix}warn <@tag>_
° ඬ⃟💎 _${usedPrefix}unwarn <@tag>_
° ඬ⃟💎 _${usedPrefix}listwarn_
° ඬ⃟💎 _${usedPrefix}fantasmas_
° ඬ⃟💎 _${usedPrefix}destraba_

*<ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟🧧 _${usedPrefix}togifaud *<responde a un video>*_
° ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊/>*

° 🖍️ ${usedPrefix}logos <efecto> <texto>
° 🖍️ ${usedPrefix}logocorazon <texto>
° 🖍️ ${usedPrefix}logochristmas <texto>
° 🖍️ ${usedPrefix}simpcard <@tag>
° 🖍️ ${usedPrefix}hornycard <@tag>
° 🖍️ ${usedPrefix}lolice <@tag>
° 🖍️ ${usedPrefix}ytcomment <texto>
° 🖍️ ${usedPrefix}phmaker <opcion><responder a imagen>
° 🖍️ ${usedPrefix}itssostupid
° 🖍️ ${usedPrefix}pixelar
° 🖍️ ${usedPrefix}blur

*<𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊/>*

° 🥀 ${usedPrefix}consejo
° 🥀 ${usedPrefix}fraseromantica
° 🥀 ${usedPrefix}historiaromantica

*<ℝ𝔸ℕ𝔻𝕆𝕄/>*

° 👾 ${usedPrefix}cristianoronaldo
° 👾 ${usedPrefix}messi
° 👾 ${usedPrefix}meme
° 👾 ${usedPrefix}itzy
° 👾 ${usedPrefix}blackpink
° 👾 ${usedPrefix}kpop <blackpink / exo / bts>
° 👾 ${usedPrefix}lolivid
° 👾 ${usedPrefix}loli
° 👾 ${usedPrefix}navidad
° 👾 ${usedPrefix}ppcouple
° 👾 ${usedPrefix}wpmontaña
° 👾 ${usedPrefix}pubg
° 👾 ${usedPrefix}wpgaming
° 👾 ${usedPrefix}wpaesthetic
° 👾 ${usedPrefix}wpaesthetic2
° 👾 ${usedPrefix}wprandom
° 👾 ${usedPrefix}wallhp
° 👾 ${usedPrefix}wpvehiculo
° 👾 ${usedPrefix}wpmoto
° 👾 ${usedPrefix}coffee
° 👾 ${usedPrefix}pentol
° 👾 ${usedPrefix}caricatura
° 👾 ${usedPrefix}ciberespacio
° 👾 ${usedPrefix}technology
° 👾 ${usedPrefix}doraemon
° 👾 ${usedPrefix}hacker
° 👾 ${usedPrefix}planeta
° 👾 ${usedPrefix}randomprofile
° 👾 ${usedPrefix}neko
° 👾 ${usedPrefix}waifu
° 👾 ${usedPrefix}akira
° 👾 ${usedPrefix}akiyama
° 👾 ${usedPrefix}anna
° 👾 ${usedPrefix}asuna
° 👾 ${usedPrefix}ayuzawa
° 👾 ${usedPrefix}boruto
° 👾 ${usedPrefix}chiho
° 👾 ${usedPrefix}chitoge
° 👾 ${usedPrefix}deidara
° 👾 ${usedPrefix}erza
° 👾 ${usedPrefix}elaina
° 👾 ${usedPrefix}eba
° 👾 ${usedPrefix}emilia
° 👾 ${usedPrefix}hestia
° 👾 ${usedPrefix}hinata
° 👾 ${usedPrefix}inori
° 👾 ${usedPrefix}isuzu
° 👾 ${usedPrefix}itachi
° 👾 ${usedPrefix}itori
° 👾 ${usedPrefix}kaga
° 👾 ${usedPrefix}kagura
° 👾 ${usedPrefix}kaori
° 👾 ${usedPrefix}keneki
° 👾 ${usedPrefix}kotori
° 👾 ${usedPrefix}kurumi
° 👾 ${usedPrefix}madara
° 👾 ${usedPrefix}mikasa
° 👾 ${usedPrefix}miku
° 👾 ${usedPrefix}minato
° 👾 ${usedPrefix}naruto
° 👾 ${usedPrefix}nezuko
° 👾 ${usedPrefix}sagiri
° 👾 ${usedPrefix}sasuke
° 👾 ${usedPrefix}sakura
° 👾 ${usedPrefix}cosplay

*<ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠/>*

° 🔞 ${usedPrefix}pack
° 🔞 ${usedPrefix}pack2
° 🔞 ${usedPrefix}pack3
° 🔞 ${usedPrefix}videoxxx
° 🔞 ${usedPrefix}tiktokxxx
° 🔞 ${usedPrefix}tetas
° 🔞 ${usedPrefix}booty
° 🔞 ${usedPrefix}ecchi
° 🔞 ${usedPrefix}furro
° 🔞 ${usedPrefix}imagenlesbians
° 🔞 ${usedPrefix}panties
° 🔞 ${usedPrefix}pene
° 🔞 ${usedPrefix}porno
° 🔞 ${usedPrefix}porno2
° 🔞 ${usedPrefix}randomxxx
° 🔞 ${usedPrefix}pechos
° 🔞 ${usedPrefix}yaoi
° 🔞 ${usedPrefix}yaoi2
° 🔞 ${usedPrefix}yuri
° 🔞 ${usedPrefix}yuri2
° 🔞 ${usedPrefix}trapito
° 🔞 ${usedPrefix}hentai
° 🔞 ${usedPrefix}nsfwloli
° 🔞 ${usedPrefix}nsfworgy
° 🔞 ${usedPrefix}nsfwfoot
° 🔞 ${usedPrefix}nsfwass
° 🔞 ${usedPrefix}nsfwbdsm
° 🔞 ${usedPrefix}nsfwcum
° 🔞 ${usedPrefix}nsfwero
° 🔞 ${usedPrefix}nsfwfemdom
° 🔞 ${usedPrefix}nsfwglass

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

° 🎤 ${usedPrefix}bass
° 🎤 ${usedPrefix}blown
° 🎤 ${usedPrefix}deep
° 🎤 ${usedPrefix}earrape
° 🎤 ${usedPrefix}fast
° 🎤 ${usedPrefix}fat
° 🎤 ${usedPrefix}nightcore
° 🎤 ${usedPrefix}reverse
° 🎤 ${usedPrefix}robot
° 🎤 ${usedPrefix}slow
° 🎤 ${usedPrefix}smooth
° 🎤 ${usedPrefix}tupai

*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*

° 📳 ${usedPrefix}start
° 📳 ${usedPrefix}next
° 📳 ${usedPrefix}leave

*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° 🔍 ${usedPrefix}stickersearch <texto>
° 🔍 ${usedPrefix}xnxxsearch <texto>
° 🔍 ${usedPrefix}animeinfo <texto>
° 🔍 ${usedPrefix}google <texto>
° 🔍 ${usedPrefix}letra <texto>
° 🔍 ${usedPrefix}wikipedia <texto>
° 🔍 ${usedPrefix}ytsearch <texto>
° 🔍 ${usedPrefix}apkdone <texto>
° 🔍 ${usedPrefix}apkgoogle <texto>
° 🔍 ${usedPrefix}apkmody <texto>
° 🔍 ${usedPrefix}apkshub <texto>
° 🔍 ${usedPrefix}happymod <texto>
° 🔍 ${usedPrefix}hostapk <texto>
° 🔍 ${usedPrefix}revdl <texto>
° 🔍 ${usedPrefix}toraccino <texto>
° 🔍 ${usedPrefix}uapkpro <texto>
° 🔍 ${usedPrefix}playstore <texto>

*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*
° 🛠️ ${usedPrefix}clima <país> / <ciudad>
° 🛠️ ${usedPrefix}encuesta <texto1|texto2...>
° 🛠️ ${usedPrefix}afk <motivo>
° 🛠️ ${usedPrefix}ocr <responde a imagen>
° 🛠️ ${usedPrefix}acortar <enlace / link / url>
° 🛠️ ${usedPrefix}calc <operacion math>
° 🛠️ ${usedPrefix}del <respondre a mensaje del Bot>
° 🛠️ ${usedPrefix}whatmusic <responde a un audio>
° 🛠️ ${usedPrefix}readqr <responde a imagen (QR)>
° 🛠️ ${usedPrefix}qrcode <texto>
° 🛠️ ${usedPrefix}readmore <texto1| texto2>
° 🛠️ ${usedPrefix}spamwa <numero|texto|cantidad>
° 🛠️ ${usedPrefix}styletext <texto>
° 🛠️ ${usedPrefix}traducir <texto>
° 🛠️ ${usedPrefix}zoom <texto>
° 🛠️ ${usedPrefix}nowa <numero>
° 🛠️ ${usedPrefix}covid <pais>
° 🛠️ ${usedPrefix}horario

*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

° 💵 ${usedPrefix}balance
° 💵 ${usedPrefix}claim
° 💵 ${usedPrefix}lb
° 💵 ${usedPrefix}levelup
° 💵 ${usedPrefix}myns
° 💵 ${usedPrefix}perfil
° 💵 ${usedPrefix}work
° 💵 ${usedPrefix}minar
° 💵 ${usedPrefix}buy
° 💵 ${usedPrefix}buyall
° 💵 ${usedPrefix}transfer *<tipo> <cantidad> <@tag>
° 💵 ${usedPrefix}verificar
° 💵 ${usedPrefix}unreg <numero de serie>

*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*

° 👽 ${usedPrefix}sticker <responder a imagen o video>
° 👽 ${usedPrefix}sticker <enlace / link / url>
° 👽 ${usedPrefix}s <responder a imagen o video>
° 👽 ${usedPrefix}s <enlace / link / url>
° 👽 ${usedPrefix}sfull <responder a imagen o video>
° 👽 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
° 👽 ${usedPrefix}scircle <responder a imagen>
° 👽 ${usedPrefix}sremovebg <responder a imagen>
° 👽 ${usedPrefix}semoji <tipo> <emoji>
° 👽 ${usedPrefix}attp <texto>
° 👽 ${usedPrefix}attp2 <texto>
° 👽 ${usedPrefix}attp3 <texto>
° 👽 ${usedPrefix}ttp <texto>
° 👽 ${usedPrefix}ttp2 <texto>
° 👽 ${usedPrefix}ttp3 <texto>
° 👽 ${usedPrefix}ttp4 <texto>
° 👽 ${usedPrefix}ttp5 <texto>
° 👽 ${usedPrefix}pat <@tag>
° 👽 ${usedPrefix}slap <@tag>
° 👽 ${usedPrefix}kiss <@tag>
° 👽 ${usedPrefix}dado
° 👽 ${usedPrefix}wm *<packname> <author>
° 👽 ${usedPrefix}stickermarker *<efecto> <responder a imagen>
° 👽 ${usedPrefix}stickerfilter *<efecto> <responder a imagen>

*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° 👑 > *<funcion>*
° 👑 => *<funcion>*
° 👑 $ *<funcion>*
° 👑 ${usedPrefix}setprefix *<prefijo>*_
° 👑 ${usedPrefix}resetprefix_
° 👑 ${usedPrefix}autoadmin_
° 👑 ${usedPrefix}cajafuerte_
° 👑 ${usedPrefix}blocklist_
° 👑 ${usedPrefix}block *<@tag / numero>*_
° 👑 ${usedPrefix}unblock *<@tag / numero>*_
° 👑 ${usedPrefix}enable *restrict*_
° 👑 ${usedPrefix}disable *restrict*_
° 👑 ${usedPrefix}enable *autoread*_
° 👑 ${usedPrefix}disable *autoread*_
° 👑 ${usedPrefix}enable *public*_
° 👑 ${usedPrefix}disable *public*_
° 👑 ${usedPrefix}enable *pconly*_
° 👑 ${usedPrefix}disable *pconly*_
° 👑 ${usedPrefix}enable *gconly*_
° 👑 ${usedPrefix}disable *gconly*_
° 👑 ${usedPrefix}enable *anticall*_
° 👑 ${usedPrefix}disable *anticall*_
° 👑 ${usedPrefix}enable *antiprivado*_
° 👑 ${usedPrefix}disable *antiprivado*_
° 👑 ${usedPrefix}msg *<texto>*_
° 👑 ${usedPrefix}banchat_
° 👑 ${usedPrefix}unbanchat_
° 👑 ${usedPrefix}banuser *<@tag>*_
° 👑 ${usedPrefix}unbanuser *<@tag>*_
° 👑 ${usedPrefix}dardiamantes *<@tag>*_
° 👑 ${usedPrefix}añadirxp *<@tag>*_
° 👑 ${usedPrefix}banuser *<@tag>*_
° 👑 ${usedPrefix}bc *<texto>*_
° 👑 ${usedPrefix}bcchats *<texto>*_
° 👑 ${usedPrefix}bcgc *<texto>*_
° 👑 ${usedPrefix}bcbot *<texto>*_
° 👑 ${usedPrefix}cleartpm_
° 👑 ${usedPrefix}restart_
° 👑 ${usedPrefix}update_
° 👑 ${usedPrefix}banlist_
° 👑 ${usedPrefix}addprem <@tag>
° 👑 ${usedPrefix}delprem <@tag>*_
° 👑 ${usedPrefix}listprem
° 👑 ${usedPrefix}listcmd
° 👑 ${usedPrefix}addcmd <texto> <responder a sticker/imagen>
° 👑 ${usedPrefix}delcmd <responder a sticker/imagen con comando o texto asignado>

*<𝕄𝔸𝕋𝔸 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ - 𝕍𝕀ℝ𝕌𝕊/>*

° ඬ⃟☠ _${usedPrefix}crash𝟷_
° ඬ⃟☠ _${usedPrefix}crash2_
° ඬ⃟☠ _${usedPrefix}crash3_
° ඬ⃟☠ _${usedPrefix}crash4_
° ඬ⃟☠ _${usedPrefix}crash5_
° ඬ⃟☠ _${usedPrefix}crash6_
° ඬ⃟☠ _${usedPrefix}crash7_
° ඬ⃟☠ _${usedPrefix}crash8_
`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '🌹 𝙾𝚆𝙽𝙴𝚁 🌹' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
