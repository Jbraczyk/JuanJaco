const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload");
const { Client, GatewayIntentBits } = require('discord.js')

const {  
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    StreamType,
} = require('@discordjs/voice')

require('dotenv').config()

const {
  DISCORD_APP_TOKEN,
  DISCORD_SERVER_ID,
  DISCORD_CHANNEL_ID,
  EXPRESS_API_PORT
} = process.env

app.use(cors())
app.use(express.json())
app.use(fileUpload())

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
] })

async function createSoundBox(soundName) {
    const currentGuild = await client.guilds.fetch(DISCORD_SERVER_ID)
    const connection = joinVoiceChannel({
        channelId: DISCORD_CHANNEL_ID,
        guildId: DISCORD_SERVER_ID,
        adapterCreator: currentGuild.voiceAdapterCreator,
    })

    const stream = createAudioPlayer()
    connection.subscribe(stream)
    const resource = createAudioResource(`./mp3/${soundName}.mp3`, {
        inputType: StreamType.Arbitrary,
    })

  stream.play(resource)
}

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} ready!`)
  app.listen(EXPRESS_API_PORT, () => {
    console.log(`API ready`)
  })
})

app.post("/soundCall", async (req, res) => {
  await createSoundBox(req.body.name)

  return res.status(200).send(`${req.body.name} played!`)
})

client.login(DISCORD_APP_TOKEN)