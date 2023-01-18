import { Configuration, OpenAIApi } from "openai"
import { writeFileSync } from "fs"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const prompt = "This is a test of the emergency broadcast system."

const result = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
    user: "luca",
})

const url = result.data.data[0].url
console.log(url)

// Save the URL to Disk
const imgResult = await fetch(url)
const blob = await imgResult.blob()
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`, buffer)
