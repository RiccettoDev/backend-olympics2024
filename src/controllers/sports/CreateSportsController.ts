import { FastifyRequest, FastifyReply } from "fastify"
import { CreateSportsService } from "../../services/sports/CreateSportsService"

class CreateSportsController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const { name, img, description} = request.body as {
        name: string, 
        img: string, 
        description: string
      }

    const sportsService = new CreateSportsService()

    const sports = await sportsService.execute({ name, img, description })

    reply.send(sports)
  }
}

export { CreateSportsController }