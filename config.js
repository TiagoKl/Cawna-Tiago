import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'

global.owner = [
 ['51946352266', 'ึช ห ๐ ฬคฬธฬทฬทฬธฬณฬถ   ๐ฒ5.  ึช ๐ฬธฬท๐ฬธฬทอก๐๐ฬธฬถฬธฬท๐ฬถฬทฬธย  ฬคฬธฬคฬท ฬคฬธฬคฬท ๐ฅ ฬคฬธฬคฬท', true],
 ['12142072867', '๐ค ๐ฆ๐ข๐ฃ๐ข๐ฅ๐ง๐ ๐งร๐๐ก๐๐๐ข ๐๐ ๐๐๐ช๐ก๐-๐๐ข๐ง', true],
]

global.suittag = ['51946352266'] 
global.prems = [''] 

global.packname = '๐๐๐๐๐๐๐ย  ๐บฬถ  ๐๊ฟ๐ฮฃ๐ฑ๐ก๐๐แฬท'
global.author = '๐ฉธ โฎ ๏ผ   ๐ฆ๐ฟ ๐๐ฎ๐๐ป๐ฎ  ๊ฑ'
global.wm = '๐ ๐๐๐ช๐ก๐ - ๐๐ข๐ง - ๐ ๐ ๐'
global.igfg = '๐ ๐๐๐ช๐ก๐ - ๐๐ข๐ง - ๐ ๐ ๐'
global.wait = '*[โ] ฦแดสษขแดษดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...*'

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')

global.generateWAMessageFromContent = generateWAMessageFromContent

global.mods = [] 

global.multiplier = 9999 
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '๐',
limit: '๐',
exp: '๐น๏ธ'}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]}}
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
