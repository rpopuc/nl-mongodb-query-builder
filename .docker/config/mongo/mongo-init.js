db.game.insertOne({
    "title": "Catan",
    "hash": "catan",
    "release_year": 1995,
    "designers": ["Klaus Teuber"],
    "categories": ["Economic", "Negotiation"],
    "mechanics": ["Dice Rolling", "Trading", "Variable Player Powers"],
    "average_rating": 7.2,
    "min_playing_time": 60,
    "max_playing_time": 120,
    "recommended_age": 10,
    "type": ["Abstract Strategy", "Family"]
})

db.game.insertOne({
  "title": "7 Wonders",
  "hash": "7-wonders",
  "release_year": 2010,
  "designers": ["Antoine Bauza"],
  "categories": ["Card Game", "Civilization"],
  "mechanics": ["Card Drafting", "Set Collection"],
  "average_rating": 7.8,
  "min_playing_time": 30,
  "max_playing_time": 60,
  "recommended_age": 10,
  "type": ["Strategy"]
})

db.game.insertOne({
    "title": "Codenames",
    "hash": "codenames",
    "release_year": 2015,
    "designers": ["Vlaada Chvátil"],
    "categories": ["Party", "Word Game"],
    "mechanics": ["Team-Based Game", "Memory"],
    "average_rating": 7.7,
    "min_playing_time": 15,
    "max_playing_time": 30,
    "recommended_age": 14,
    "type": ["Party"]
})

db.game.insertOne({
    "title": "7 Wonders Duel",
    "hash": "7-wonders-duel",
    "release_year": 2015,
    "designers": ["Antoine Bauza", "Bruno Cathala"],
    "categories": ["Card Game", "Civilization"],
    "mechanics": ["Set Collection", "Drafting", "Simultaneous Action Selection"],
    "average_rating": 8.2,
    "min_playing_time": 30,
    "max_playing_time": 30,
    "recommended_age": 10,
    "type": ["Abstract Strategy"]
})

db.game.insertOne({
  "title": "Through the Ages: A New Story of Civilization",
  "hash": "through-the-ages",
  "release_year": 2015,
  "designers": ["Vlaada Chvátil"],
  "categories": ["Card Game", "Civilization"],
  "mechanics": ["Card Drafting", "Resource Management"],
  "average_rating": 8.5,
  "min_playing_time": 120,
  "max_playing_time": 240,
  "recommended_age": 14,
  "type": ["Strategy"]
})

db.game.insertOne({
    "title": "Root",
    "hash": "root",
    "release_year": 2018,
    "designers": ["Cole Wehrle"],
    "categories": ["Adventure", "Animals"],
    "mechanics": ["Hand Management", "Area Control / Area Influence"],
    "average_rating": 8.0,
    "min_playing_time": 60,
    "max_playing_time": 90,
    "recommended_age": 10,
    "type": ["Thematic", "Strategy"]
})

db.game.insertOne({
    "title": "Twilight Imperium: Fourth Edition",
    "hash": "twilight-imperium-fourth-edition",
    "release_year": 2017,
    "designers": ["Dane Beltrami", "Corey Konieczka", "Christian T. Petersen"],
    "categories": ["Civilization", "Exploration", "Negotiation"],
    "mechanics": ["Area Control / Area Influence", "Dice Rolling", "Variable Player Powers"],
    "average_rating": 8.6,
    "min_playing_time": 240,
    "max_playing_time": 480,
    "recommended_age": 14,
    "type": ["Thematic", "Wargame"]
})

db.game.insertOne({
    "title": "Scythe",
    "hash": "scythe",
    "release_year": 2016,
    "designers": ["Jamey Stegmaier"],
    "categories": ["Economic", "Fantasy", "Science Fiction"],
    "mechanics": ["Area Control", "Resource Management"],
    "average_rating": 8.3,
    "min_playing_time": 90,
    "max_playing_time": 115,
    "recommended_age": 14,
    "type": "Strategy"
})

db.game.insertOne({
    "title": "Ticket to Ride",
    "hash": "ticket-to-ride",
    "release_year": 2004,
    "designers": ["Alan R. Moon"],
    "categories": ["Trains"],
    "mechanics": ["Connections", "Contracts", "End game Bonusses", "Hand Management", "Network and Route Building"],
    "average_rating": 7.6,
    "min_playing_time": 30,
    "max_playing_time": 60,
    "recommended_age": 8,
    "type": "Family"
})

db.game.insertOne({
    "title": "Pandemic",
    "hash": "pandemic",
    "realease_year": 2008,
    "designers": ["Matt Leacock"],
    "categories": ["Medical", "Cooperative Game"],
    "mechanics": ["Set Collection", "Card Drafting", "Hand Management", "Variable Player Powers", "Action Points"],
    "average_rating": 7.7,
    "min_playing_time": 45,
    "max_playing_time": 90,
    "recomended_age": 8,
    "type": "Thematic"
})

db.play.insertOne({
  "game_hash": "ticket-to-ride",
  "players": ["João", "Maria"],
  "location": "Sala de estar",
  "date": ISODate("2022-04-18T19:30:00Z"),
  "duration": 60
})

db.play.insertOne({
  "game_hash": "catan",
  "players": ["Carlos", "Ana", "Pedro", "Julia"],
  "location": "Casa do Carlos",
  "date": ISODate("2022-04-15T20:00:00Z"),
  "duration": 120
})

db.play.insertOne({
  "game_hash": "pandemic",
  "players": ["Roberto", "Larissa", "Felipe"],
  "location": "Casa da Larissa",
  "date": ISODate("2022-04-16T14:30:00Z"),
  "duration": 90
})

db.play.insertOne({
  "game_hash": "splendor",
  "players": ["Lucas", "Gustavo", "Fernanda"],
  "location": "Sala de jogos",
  "date": ISODate("2022-04-17T15:00:00Z"),
  "duration": 45
})

db.play.insertOne({
  "game_hash": "azul",
  "players": ["André", "Mariana", "Rafaela"],
  "location": "Casa do André",
  "date": ISODate("2022-04-19T19:00:00Z"),
  "duration": 60
})


db.play.insertOne({
  game_hash: "ticket-to-ride",
  players: ["João", "Maria", "Pedro", "João"],
  location: "Casa da Maria",
  date: new Date("2022-02-01"),
  duration: 60
})

db.play.insertOne({
  game_hash: "catan",
  players: ["Pedro", "Maria", "Maria", "Lucas"],
  location: "Casa do Pedro",
  date: new Date("2022-03-05"),
  duration: 120
})

db.play.insertOne({
  game_hash: "pandemic",
  players: ["Lucas", "João", "Pedro", "Lucas"],
  location: "Casa do Lucas",
  date: new Date("2022-04-10"),
  duration: 90
})

db.play.insertOne({
  game_hash: "splendor",
  players: ["Maria", "Lucas", "Pedro", "Pedro"],
  location: "Casa da Maria",
  date: new Date("2022-05-15"),
  duration: 45
})

db.play.insertOne({
  game_hash: "azul",
  players: ["João", "João", "Lucas", "Pedro"],
  location: "Casa do João",
  date: new Date("2022-06-20"),
  duration: 60
})


db.play.insertOne({
    game_hash: "splendor",
    players: ["João", "Maria", "Pedro"],
    location: "Casa",
    date: new Date("2022-03-15T19:30:00Z"),
    duration: 60
})

db.play.insertOne({
    game_hash: "catan",
    players: ["Ana", "Carlos", "Julia", "Marcos"],
    location: "Casa da Ana",
    date: new Date("2022-03-16T14:00:00Z"),
    duration: 120
})

db.play.insertOne({
    game_hash: "azul",
    players: ["Felipe", "Isabela"],
    location: "Casa do Felipe",
    date: new Date("2022-03-16T18:00:00Z"),
    duration: 45
})

db.play.insertOne({
    game_hash: "codenames",
    players: ["Thiago", "Gabriela", "Lucas"],
    location: "Bar do Thiago",
    date: new Date("2022-03-17T20:00:00Z"),
    duration: 60
})

db.play.insertOne({
    game_hash: "twilight-imperium-fourth-edition",
    players: ["Diego", "Fernanda", "Rodrigo", "Amanda", "Vitor"],
    location: "Casa do Diego",
    date: new Date("2022-03-18T10:00:00Z"),
    duration: 360
})

db.collection.insertOne({
  title: "Minha coleção 1",
  description: "Descrição da minha coleção 1",
  owner: "Thiago",
  games: ["ticket-to-ride", "catan", "pandemic", "codenames"]
})

db.collection.insertOne({
  title: "Minha coleção 2",
  description: "Descrição da minha coleção 2",
  owner: "Diego",
  games: ["splendor", "azul", "codenames", "7-wonders"]
})

db.collection.insertOne({
  title: "Minha coleção 3",
  description: "Descrição da minha coleção 3",
  owner: "Rodrigo",
  games: ["7-wonders-duel", "root", "twilight-imperium-fourth-edition", "through-the-ages"]
})

db.collection.insertOne({
  title: "Minha coleção 4",
  description: "Descrição da minha coleção 4",
  owner: "Carlos",
  games: ["ticket-to-ride", "splendor", "7-wonders-duel", "root"]
})

db.collection.insertOne({
  title: "Minha coleção 5",
  description: "Descrição da minha coleção 5",
  owner: "Pedro",
  games: ["catan", "pandemic", "azul", "codenames", "scythe"]
})