import { FastifyRequest, FastifyReply } from "fastify";
import { CreateStadiumService } from "../../services/stadium/CreateStadiumService";

class CreateStadiumController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const { name, img, description, capacity } = request.body as {
      name: string,
      img: string,
      description: string,
      capacity: string
    }

    const stadiumService = new CreateStadiumService()

    const stadium = await stadiumService.execute({
      name,
      img,
      description,
      capacity
    })

    reply.send(stadium)

  }
}

export { CreateStadiumController }