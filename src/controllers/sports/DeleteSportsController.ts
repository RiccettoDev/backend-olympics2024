import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteSportsService } from "../../services/sports/DeleteSportsService";

class DeleteSportsController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.query as { id: string }

    const sportsService =  new DeleteSportsService()
    const sports = sportsService.execute({ id })

    reply.send(sports)

  }
}

export { DeleteSportsController }