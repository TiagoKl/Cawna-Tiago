import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await('https://telegra.ph/file/e4b656f730216ac0168ad.jpg')).buffer()
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
let str = `🛑 𝗖𝗔𝗪𝗡𝗔 - 𝗕𝗢𝗧 - 𝗠𝗗 🛑

• ${taguser}

📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}

𝐋𝐈𝐃𝚵𝐑 ː
     𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死

╎░┆〘🗞️〙▸ ${usedPrefix}creador 

🟢 𝗔𝗚𝗥𝗘𝗚𝗔𝗠𝗘 𝗔 𝗧𝗨 𝗚𝗥𝗨𝗣𝗢

╎░┆〘🥏〙▸ ${usedPrefix}join <enlace del grupo>
        • Te recomiendo usar este comando
           en mi privado para que evites que 
           te eliminen.

🩸   𝐗𝕏𝗫  : 𝗝𝗨𝗘𝗚𝗢𝗦 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 𓊈📝𓊉

 ° 📥 {usedPrefix}instagram <enlace / link / url>
 ° 📥 ${usedPrefix}mediafire <enlace / link / url>
 ° 📥 ${usedPrefix}instagram <enlace / link / url>
 ° 📥 ${usedPrefix}gitclone <enlace / link / url> 
 ° 📥 ${usedPrefix}stickerpack <enlace / link / url>
 ° 📥 ${usedPrefix}gdrive <enlace / link / url> 
 ° 📥 ${usedPrefix}tiktok enlace / link / url>
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

🩸   𝐗𝕏𝗫  : 𝗚𝗥𝗨𝗣𝗢𝗦 𓊈📝𓊉

 ° 💎 ${usedPrefix}add <numero>
 ° 💎 ${usedPrefix}kick <@tag>
 ° 💎 ${usedPrefix}grupo <abrir / cerrar>
 ° 💎 ${usedPrefix}grouptime *<opcion> <tiempo>
 ° 💎 ${usedPrefix}promote <@tag> 
 ° 💎 ${usedPrefix}demote <@tag>
 ° 💎 admins <texto>
 ° 💎 ${usedPrefix}demote <@tag>
 ° 💎 ${usedPrefix}infogroup
 ° 💎 ${usedPrefix}resetlink
 ° 💎 ${usedPrefix}link
 ° 💎 ${usedPrefix}setname <texto>
 ° 💎 ${usedPrefix}setdesc <texto>
 ° 💎 ${usedPrefix}invocar <texto>
 ° 💎 ${usedPrefix}setwelcome <texto>
 ° 💎 ${usedPrefix}setbye <texto>
 ° 💎 ${usedPrefix}hidetag <texto>
 ° 💎 ${usedPrefix}warn <@tag>
 ° 💎 ${usedPrefix}unwarn <@tag>
 ° 💎 ${usedPrefix}listwarn
 ° 💎 ${usedPrefix}fantasmas
 ° 💎 ${usedPrefix}destraba

🩸   𝐗𝕏𝗫  : 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦 𓊈📝𓊉
  
 ° 🧧 ${usedPrefix}togifaud <responde a un video>
 ° 🧧 ${usedPrefix}toimg <responde a un sticker>
 ° 🧧 ${usedPrefix}tomp3 <responde a un video / nota de voz> 
 ° 🧧 ${usedPrefix}toptt <responde a un video / audio>
 ° 🧧 ${usedPrefix}tovideo <responde a un sticker> 
 ° 🧧 ${usedPrefix}tourl <responde a un video / imagen / audio>
 ° 🧧 ${usedPrefix}tts es <texto>

🩸   𝐗𝕏𝗫  : 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗬 𝗟𝗢𝗚𝗢𝗦 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗙𝗥𝗔𝗦𝗘𝗦 𝗬 𝗧𝗘𝗫𝗧𝗢𝗦 𓊈📝𓊉

° 🥀 ${usedPrefix}consejo
° 🥀 ${usedPrefix}fraseromantica
° 🥀 ${usedPrefix}historiaromantica

🩸   𝐗𝕏𝗫  : 𝗥𝗔𝗡𝗗𝗢𝗠𝗦 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗣𝗘𝗥𝗩𝗘𝗥𝗧𝗜𝗗𝗢 - 𝗣𝗘𝗥𝗩𝗘𝗥𝗧𝗜𝗗𝗔 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢𝗦 𓊈📝𓊉
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

🩸   𝐗𝕏𝗫  : 𝗖𝗛𝗔𝗧 𝗔𝗡Ó𝗡𝗜𝗠𝗢 𓊈📝𓊉

° 📳 ${usedPrefix}start
° 📳 ${usedPrefix}next
° 📳 ${usedPrefix}leave

🩸   𝐗𝕏𝗫  : 𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗥𝗣𝗚 - 𝗟Í𝗠𝗜𝗧𝗘𝗦 - 𝗘𝗖𝗢𝗡Ó𝗠𝗜𝗔 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𓊈📝𓊉

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

🩸   𝐗𝕏𝗫  : 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗬 𝗠𝗢𝗗𝗘𝗥𝗔𝗗𝗢𝗥𝗘𝗦 𓊈📝𓊉

° 👑 > <funcion>
° 👑 => <funcion>
° 👑 $ <funcion>
° 👑 ${usedPrefix}setprefix <prefijo>
° 👑 ${usedPrefix}resetprefix
° 👑 ${usedPrefix}autoadmin
° 👑 ${usedPrefix}cajafuerte
° 👑 ${usedPrefix}blocklist
° 👑 ${usedPrefix}block <@tag / numero>
° 👑 ${usedPrefix}unblock <@tag / numero>
° 👑 ${usedPrefix}enable restrict
° 👑 ${usedPrefix}disable restrict
° 👑 ${usedPrefix}enable autoread
° 👑 ${usedPrefix}disable autoread
° 👑 ${usedPrefix}enable public
° 👑 ${usedPrefix}disable public
° 👑 ${usedPrefix}enable pconly
° 👑 ${usedPrefix}disable pconly
° 👑 ${usedPrefix}enable gconly
° 👑 ${usedPrefix}disable gconly
° 👑 ${usedPrefix}enable anticall
° 👑 ${usedPrefix}disable anticall
° 👑 ${usedPrefix}enable antiprivado
° 👑 ${usedPrefix}disable antiprivado
° 👑 ${usedPrefix}msg <texto>
° 👑 ${usedPrefix}banchat
° 👑 ${usedPrefix}unbanchat
° 👑 ${usedPrefix}banuser <@tag>
° 👑 ${usedPrefix}unbanuser <@tag>
° 👑 ${usedPrefix}dardiamantes <@tag>
° 👑 ${usedPrefix}añadirxp <@tag>
° 👑 ${usedPrefix}banuser <@tag>
° 👑 ${usedPrefix}bc <texto>
° 👑 ${usedPrefix}bcchats <texto>
° 👑 ${usedPrefix}bcgc <texto>
° 👑 ${usedPrefix}bcbot <texto>
° 👑 ${usedPrefix}cleartpm
° 👑 ${usedPrefix}restart
° 👑 ${usedPrefix}updat
° 👑 ${usedPrefix}banlist
° 👑 ${usedPrefix}addprem <@tag>
° 👑 ${usedPrefix}delprem <@tag>
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
{ buttonId: '.', buttonText: { displayText: '🛑 𝗖𝗔𝗪𝗡𝗔 - 𝗕𝗢𝗧 - 𝗠𝗗 🛑' }, type: 1 },
{ buttonId: '.', buttonText: { displayText: '🛑 𝗖𝗔𝗪𝗡𝗔 - 𝗕𝗢𝗧 - 𝗠𝗗 🛑' }, type: 1 }]
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
title: '🛑 𝗖𝗔𝗪𝗡𝗔 - 𝗕𝗢𝗧 - 𝗠𝗗 🛑',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/DLuRji6HekWGcp2VzKtLAx`
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
