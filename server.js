/////// CRIAÇÃO DE UM SERVER HTTP POR NODE PADRÃO

// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   console.log("oi");
//   response.write("olá");

//   return response.end();
// });

// server.listen(3333);

/////// CRIAÇÃO DE UM SERVER PELO FRAMEWORK FASTIFY

// import { fastify } from "fastify";

// const server = fastify();

// server.get("/", () => {
//   //localhost:3333
//   return "hello word";
// });
// server.get("/node", () => {
//   //localhost:3333/node
//   return "hello JS";
// });
// server.get("/backend", () => {
//   //localhost:3333/backend
//   return "hello Skull";
// });

// server.listen({
//   port: 3333,
// });

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
const server = fastify();
const database = new DatabaseMemory();

// CRUD -> Create, Read, Update, Delete
// GET, POST, PUT, DELETE, PATCH

// Criação de rotas:
// POST http://localhost:3333/videos
// PUT http://localhost:3333/videos/3

// !ATENÇÃO: O navegador sempre utiliza o método GET para fazer a requisição, ou seja, ele não utiliza o POST, PUT...  Apenas rotasdotipo get.

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
  //status http 201 -> algo foi criado
});
server.get("/videos", (request, reply) => {
  const videos = database.list();

  return videos;
});
server.put("/videos/:id", () => {
  return "hello Skull";
});

server.listen({
  port: 3333,
});
