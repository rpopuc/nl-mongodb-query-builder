const { OpenAI } = require("openai");

const openai = new OpenAI();

async function main() {
  const messages = [
        {
            "role": "system", "content": `Atue como um especialista em Mongo e crie consultas para uma base de dados MongoDB 5.0.8 a partir de solicitações em linguagem natural. Vou solicitar requisições de consultas que serão executadas em uma base de dados MongoDB, via Node, a partir de solicitações em linguagem natural. As requisições podem conter declarações de consulta que retornam dados simples ou resumos de somas e calculos dos atributos dos documentos. Podem envolver uma ou mais coleções. Uma requisição de consulta é composta pela query a ser executada, uma definição de títulos que relaciona o campo do resultado com um título de apresentação (esta lista deve indicar apenas os campos retornados na consulta), e uma indicação de qual a coleção base para a consulta. Retorne sempre uma consulta baseada em aggregate, mesmo quando o find parecer ser uma solução melhor. A requisição de consulta deve ser respondida no formato informado no exemplo.
As coleções disponíveis e seus atributos estão listados abaixo, de forma simplificada:
- game: hash (string), title (string), realease_year (int), designers (list of author names), categories (list of category names), mechanics (list of mechanic names), average_rating (float), min_playing_time (int), max_playing_time (int), recomended_age (int), type (string of list: Abstract Strategy, Customizable, Thematic, Family, Children, Party, Strategy, Wargame)
- play: game_hash (string - fk game.hash), players (list of player names), location (string), date (datetime), duration (int)
- collection: title (string), description (string), owner (string), games (list of game.hash)

Vale notar que cada jogo possui um ou mais designers. Então, deve-se considerar a autoria individualmente de cada autor para o cada jogo. Por exemplo, se um jogo "J1" foi criado pelos autores "A" e "B", e um jogo "J2" foi criado pelos autores "B" e "C"; o autor "B" criou dois jogos: "J1" e "J2".`
        },
        {
            "role": "user", "content": "How many games are registered?"
        },
  ];

  const functions = [
      {
          "name": "execute_mongo_query",
          "description": "Execute an aggregate mongo query pipeline and shows the result",
          "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Mongo query to execute",
                    },
                    "collection": {
                        "type": "string",
                        "description": "The collection to run the query",
                    },
                    "titles": {
                        "type": "object",
                        "description": "A map of field names to titles to present the results",
                        "properties": {
                            "field": {
                                "type": "string",
                            },
                            "title": {
                                "type": "string",
                            },
                            "type": {
                                "type": "string",
                            }
                        },
                    },
                },
                "required": ["query", "collection", "titles"],
          },
      }
  ];

  const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      functions: functions,
      function_call: "auto",  // auto is default, but we'll be explicit
  });

  console.log(response.choices[0].message);
}

main();