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
# text: Open AI API for completion
# chat: Open AI API for chat completion
$ ts-node index.ts {text|chat}
```

## change prompt

prompt is set in `index.ts`.
you can change prompt as you like.

text completion prompt is set in `textPrompt`.
chat completion prompt is set in `chatPrompt` and `systemPrompt`.

## Reference

- [OpenAI API](https://beta.openai.com/docs/api-reference/introduction)

