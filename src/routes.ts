import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCountryController } from "./controllers/CreateCountryController";
import { ListCountryController } from "./controllers/ListCountryController";
import { DeleteCountryController } from "./controllers/DeleteCountryController";

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
}