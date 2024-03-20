import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCountryService } from "../../services/country/UpdateCountryService";

class UpdateCountryController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params as { id: string }
    const { 
      name, 
      flag, 
      description, 
      gold_medals, 
      silver_medals, 
      bronze_medals } = request.body as { 
        name: string 
        flag: string
        description: string
        gold_medals: string 
        silver_medals: string 
        bronze_medals: string
    }

    const countryService = new UpdateCountryService()
    const country = await countryService.execute({
      id, 
      name, 
      flag, 
      description, 
      gold_medals, 
      silver_medals, 
      bronze_medals})

    reply.send(country)

  }
}

export { UpdateCountryController }