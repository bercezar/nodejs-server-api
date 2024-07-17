import {} from "./db.js";

sql`CREATE TABLE videos(
    id TEX PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration integer
);`.then(() => {
  //após a criação da tabela no banco de dados ser bem-sucedida
  console.log("Tabela criada");
});
