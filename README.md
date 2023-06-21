Open AI API Sample
---

## Overview
This is a sample of Open AI API.

## How to use
1. install nodejs packages
```bash
$ npm install
```

2. set your API key
```bash
cp .env.sample .env
```

3. set your API key
   open `.env` and set your API key
```text
OPENAI_SECRET_KEY=YOUR_API_KEY
```

4. run
```bash
# text: Open AI API for completion (model: text-davinci-003) 
# chat: Open AI API for chat completion (model: gpt-3.5-turbo-0613)
$ ts-node index.ts {text|chat}
```

## result
response will be written in `..._response_text.txt`.

you can change the filename for result.
if you want to change the filename, change `TEXT_RESPONSE_FILE_PATH` or `TEXT_RESPONSE_FILE_PATH` in `.env`.

## change prompt

prompt is set in `index.ts`.
you can change prompt as you like.

text completion prompt is set in `textPrompt`.
chat completion prompt is set in `chatPrompt` and `systemPrompt`.

## Reference

- [OpenAI API](https://beta.openai.com/docs/api-reference/introduction)

