import { sql } from "./db.js";

sql`CREATE TABLE videos(
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration integer
);`.then(() => {
  //após a criação da tabela no banco de dados ser bem-sucedida
  console.log("Tabela criada");
});
