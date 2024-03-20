import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteCountryService } from "../../services/country/DeleteCountryService"

class DeleteCountryController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.query as { id: string }

    const countryService = new DeleteCountryService()
    const country = countryService.execute({ id })
    reply.send(country)
  }
}

export { DeleteCountryController }