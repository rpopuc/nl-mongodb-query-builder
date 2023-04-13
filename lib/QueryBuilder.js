class QueryBuilder {

    static async handle(question) {
        const { Configuration, OpenAIApi } = require("openai");

        const fs = require('fs');
        const iaPrompt = fs.readFileSync(__dirname + '/../templates/ia-prompt.template', 'utf-8');
        const userPrompt = fs.readFileSync(__dirname + '/../templates/user-prompt.template', 'utf-8');
        const userContent = `${userPrompt} '${question}'.`;

        const messages = [
            { role: 'AI', content: iaPrompt },
            { role: 'H', content: userContent }
        ];

        const prompt = messages.map(message => `${message.role}: ${message.content}`).join('\n')
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        let textResponse = ''
        const openai = new OpenAIApi(configuration);

        return openai.createCompletion({
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 1000,
            stop: [" H:", " AI:"],
            prompt,
        }).then(response => {
            textResponse = response.data.choices[0].text.trim();
            fs.writeFileSync(__dirname + '/../templates/last_response.txt', textResponse);
            return textResponse
        }).catch(error => console.log('error'));
    }
}

module.exports = QueryBuilder;