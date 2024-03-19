import { FastifyRequest, FastifyReply } from "fastify";
import { ListSportsService } from "../../services/sports/ListSportsService";

class ListSportsController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listSportsService = new ListSportsService()
    const sports = await listSportsService.execute()
    reply.send(sports)
  }
}

export { ListSportsController }