class QueryBuilder {

    static async handle(question) {
        const { OpenAI } = require("openai");

        const fs = require('fs');
        const iaPrompt = fs.readFileSync(__dirname + '/../templates/ia-function-call.template', 'utf-8');
        const userPrompt = fs.readFileSync(__dirname + '/../templates/user-prompt.template', 'utf-8');
        const functions = JSON.parse(fs.readFileSync(__dirname + '/../templates/functions.json', 'utf-8'));
        const userContent = `${userPrompt} '${question}'.`;

        const messages = [
            { role: 'system', content: iaPrompt },
            { role: 'user', content: userContent }
        ];

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        return openai.chat.completions.create({
            // model: "gpt-3.5-turbo",
            model: "gpt-3.5-turbo-0613",
            temperature: 0,
            max_tokens: 1000,
            stop: [" H:", " AI:"],
            messages,
            functions
        }).then(response => {
            const textResponse = response.choices[0].message.function_call.arguments;
            fs.writeFileSync(__dirname + '/../templates/last_response.txt', JSON.stringify(textResponse));
            return textResponse
        }).catch(error => console.log(error));
    }
}

module.exports = QueryBuilder;