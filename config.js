const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_38_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZdk5maTUvRXZsTWV2UHU3dUxUblhEVjlFRHZyZ2hEUGsrYlo0ZURYZWdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyWFlKYjlRWVRHbXBTYVJkc1JTYU5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImU1NWQ1MDFmLTM1YjYtNGIzMC04ZDA3LWQ3ZjAyZjc4NjBkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA5NyxcbiAgICAgIDE0OCxcbiAgICAgIDE3OSxcbiAgICAgIDEyMCxcbiAgICAgIDY0LFxuICAgICAgMjI0LFxuICAgICAgNTgsXG4gICAgICA4OSxcbiAgICAgIDIzOCxcbiAgICAgIDUsXG4gICAgICAxNjcsXG4gICAgICA5NCxcbiAgICAgIDQ2LFxuICAgICAgNjQsXG4gICAgICA5MixcbiAgICAgIDEzMyxcbiAgICAgIDQ5LFxuICAgICAgMjE0LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDM0LFxuICAgICAgMjcsXG4gICAgICA1NCxcbiAgICAgIDE1MixcbiAgICAgIDk1LFxuICAgICAgMTEyLFxuICAgICAgMTMxLFxuICAgICAgMjIyLFxuICAgICAgMTY0LFxuICAgICAgMTA3LFxuICAgICAgNzQsXG4gICAgICAyMzIsXG4gICAgICA5OCxcbiAgICAgIDI1LFxuICAgICAgNDUsXG4gICAgICAyLFxuICAgICAgODEsXG4gICAgICAxMzAsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjU5UUdTU0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYzNTA0MzI4OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi77y277yp77yy77y177yzXCIsXG4gICAgXCJsaWRcIjogXCI0NDQxMDQ2NTE4NTk5OToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMN0Y3OFVDRU5QWm83VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm41WkdhZTN0Q0VsejZVdU1hQ25xeVlnVjFRSWN2cDhSV09hQzRDczR5blU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibnRGUjRPdkdjRDZETEVhZkdnNDExeldkQ29hVUFlVEp1ZkVHQ29yMGpBRSs0MG5XQmJhYzVRZ0lwVXN4Nk9aTGtrc2V2VWZxa2NvN3FYWlkzMHdVRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREQ0UmlEZWRVVHhKbzFGaTlIL1BNTkgxQnNNNEdxbnZHOFBRTk1YT1FCQXpiL3BqY2ZXTjlpWTdiQ21iSFA4TnMzZTB5V3VzSXlHN3JDd0M1R0xaaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjM1MDQzMjg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzQ2NzExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1kyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZNm9PUnVNMWE0QVIwQ1BGSG9teDFXazhJcFloSzI0Qk1WTVE2QUc2aEtJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4MzQwMTkxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI2MDQ2NjcwMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
