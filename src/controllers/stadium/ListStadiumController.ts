import { FastifyRequest, FastifyReply } from "fastify";
import { ListStadiumService } from "../../services/stadium/ListStadiumService";

class ListStadiumController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listStadiumService = new ListStadiumService()
    const stadium = await listStadiumService.execute()
    reply.send(stadium)
  }
}

export { ListStadiumController }