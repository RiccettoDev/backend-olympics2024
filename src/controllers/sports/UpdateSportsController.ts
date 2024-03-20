import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateSportsService } from "../../services/sports/UpdateSportsService";

class UpdateSportsController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params as { id: string }
    const { name, img, description } = request.body as { 
      name: string
      img: string
      description: string 
    }

    const sportsService = new UpdateSportsService()
    const sports = await sportsService.execute({id, name, img, description})

    reply.send(sports)

  }
}

export { UpdateSportsController }