import { FastifyRequest, FastifyReply } from "fastify"
import { CreateCountryService } from "../services/CreateCountryService"

class CreateCountryController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const { name, flag, description, gold_medals, silver_medals, bronze_medals} = request.body as {
        name: string, 
        flag: string, 
        description: string, 
        gold_medals: string, 
        silver_medals: string, 
        bronze_medals: string}

    const countryService = new CreateCountryService()

    const country = await countryService.execute({ name, flag, description, gold_medals, silver_medals, bronze_medals })

    reply.send(country)
  }
}

export { CreateCountryController }