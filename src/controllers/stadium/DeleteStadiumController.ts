import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteStadiumService } from "../../services/stadium/DeleteStadiumService";

class DeleteStadiumController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.query as { id: string }

    const stadiumService =  new DeleteStadiumService()
    const stadium = stadiumService.execute({ id })

    reply.send(stadium)

  }
}

export { DeleteStadiumController }