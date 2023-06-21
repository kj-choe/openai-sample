import {Configuration, CreateChatCompletionResponse, CreateCompletionResponse, OpenAIApi} from "openai"

export async function requestOpenAItoText(prompt: string, model: string = 'text-davinci-003'): Promise<CreateCompletionResponse | undefined> {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_SECRET_KEY,
    })
    const openai = new OpenAIApi(configuration)

    try {
        const completion = await openai.createCompletion({
            model: model,
            prompt: prompt,
            max_tokens: Number(process.env.OPENAI_MAX_TOKEN!),
        })

        console.log(completion.data)
        return completion.data
    } catch (error: any) {
        if (error!.response) {
            console.log(error.response!.status)
            console.log(error.response!.data)
        } else {
            console.log(error!.message)
        }
    }
}

export async function requestOpenAItoChat(systemPrompt: string,  userPrompt: string, model: string = 'gpt-3.5-turbo-0613'): Promise<CreateChatCompletionResponse | undefined> {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_SECRET_KEY,
    })
    const openai = new OpenAIApi(configuration)

    try {
        const completion = await openai.createChatCompletion({
            messages: [
                {"role": "system", "content": systemPrompt},
                {"role": "user", "content": userPrompt},
            ],
            model: model,
            max_tokens: Number(process.env.OPENAI_MAX_TOKEN!),
        })

        console.log(completion.data)
        console.log(completion.data.choices[0].message)
        return completion.data
    } catch (error: any) {
        if (error!.response) {
            console.log(error.response!.status)
            console.log(error.response!.data)
        } else {
            console.log(error!.message)
        }
    }
}
