import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateStadiumService } from "../../services/stadium/UpdateStadiumService";

class UpdateStadiumController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params as { id: string }
    const { name, img, description, capacity } = request.body as { 
      name: string
      img: string
      description: string 
      capacity: string
    }

    const stadiumService = new UpdateStadiumService()
    const stadium = await stadiumService.execute({id, name, img, description, capacity})

    reply.send(stadium)

  }
}

export { UpdateStadiumController }