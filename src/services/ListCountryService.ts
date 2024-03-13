import prismaClient from "../prisma"

class ListCountryService{
  async execute(){
    const country = await prismaClient.country.findMany()
    return country
  }
}

export { ListCountryService }