import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
//-------------------------------
import { CreateCountryController } from "./controllers/CreateCountryController";
import { ListCountryController } from "./controllers/ListCountryController";
import { DeleteCountryController } from "./controllers/DeleteCountryController";
//-------------------------------
import { CreateStadiumController } from "./controllers/stadium/CreateStadiumController";
import { ListStadiumController } from "./controllers/stadium/ListStadiumController";
import { DeleteStadiumController } from "./controllers/stadium/DeleteStadiumController";
//-------------------------------
import { CreateSportsController } from "./controllers/sports/CreateSportsController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  // route test
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  // route POST Country
  fastify.post('/country', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCountryController().handle(request, reply)
  })

  // route GET Country
  fastify.get('/countries', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCountryController().handle(request, reply)
  })

  // route DELETE Country
  fastify.delete('/country', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCountryController().handle(request, reply)
  })

  //---------------------------------------

  // route POST Stadium
  fastify.post('/stadium', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateStadiumController().handle(request, reply)
  })

  // route GET Stadium
  fastify.get('/stadium', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListStadiumController().handle(request, reply)
  })

  // route DELETE Stadium
  fastify.delete('/stadium', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteStadiumController().handle(request, reply)
  })

  //---------------------------------------

  // route POST Sports
  fastify.post('/sports', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateSportsController().handle(request, reply)
  })
}