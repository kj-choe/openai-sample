import * as dotenv from 'dotenv'
import {requestOpenAItoText, requestOpenAItoChat} from './src/openai_request'
import fs from 'fs'

dotenv.config()
const textFilePath: string = process.env.TEXT_RESPONSE_FILE_PATH!
const chatFilePath: string = process.env.CHAT_RESPONSE_FILE_PATH!
const textModel: string = 'text-davinci-003'
const chatModel: string = 'gpt-3.5-turbo-0613'

const currentDateTime = new Date()

const textPrompt = `
write your text prompt here
`

const systemPrompt = `
write your system prompt here
`;

const userPrompt = `
write your user prompt here
`

if (!process.argv[2]) {
  console.error('Please specify the GPT Type. for example: ts-node index.js {text|chat}')
}

if (process.argv[2] === 'text') {
  requestOpenAItoText(textPrompt, textModel)!
    .then((response) => {
      if (response) {
        const responseDateTime = new Date()
        const diff = responseDateTime.getTime() - currentDateTime.getTime()

        const responseText = `

${new Date().toLocaleString()}
Response Time: ${diff.toLocaleString()}ms
model: ${response.model}
prompt_tokens: ${response.usage?.prompt_tokens}
completion_tokens: ${response.usage?.completion_tokens}
total_tokens: ${response.usage?.total_tokens}
${response.choices[0]?.text}

          `
        console.log(responseText)

        if (textFilePath !== undefined) {
          fs.appendFile(textFilePath, responseText, (err) => {
            if (err) throw err
            console.log(`response text added to ${process.env.TEXT_RESPONSE_FILE_PATH}!`)
          })
        }
      }
    })
}

if (process.argv[2] === 'chat') {
  requestOpenAItoChat(systemPrompt, userPrompt, chatModel)!
    .then((response) => {
      if (response) {
        const responseDateTime = new Date()
        const diff = responseDateTime.getTime() - currentDateTime.getTime()

        const responseText = `

${new Date().toLocaleString()}
Response Time: ${diff.toLocaleString()}ms
model: ${chatModel}
prompt_tokens: ${response.usage?.prompt_tokens}
completion_tokens: ${response.usage?.completion_tokens}
total_tokens: ${response.usage?.total_tokens}
${response.choices[0]?.message?.content}

            `
        console.log(responseText)

        if (chatFilePath !== undefined) {
          fs.appendFile(chatFilePath, responseText, (err) => {
            if (err) throw err
            console.log(`response text added to ${process.env.CHAT_RESPONSE_FILE_PATH}!`)
          })
        }
      }
    })
}
