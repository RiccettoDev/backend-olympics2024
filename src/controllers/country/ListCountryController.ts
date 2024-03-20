import { FastifyRequest, FastifyReply } from "fastify"
import { ListCountryService } from "../../services/country/ListCountryService"

class ListCountryController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listCountryService = new ListCountryService()
    const country = await listCountryService.execute()
    reply.send(country)
  }
}

export { ListCountryController }