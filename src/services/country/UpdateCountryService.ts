import prismaClient from "../../prisma";

interface UpdateCountryProps{
  id: string
  name: string
  flag: string
  description: string
  gold_medals: string
  silver_medals: string
  bronze_medals: string
}

class UpdateCountryService{
  async execute({ 
    id, 
    name, 
    flag, 
    description, 
    gold_medals, 
    silver_medals, 
    bronze_medals}: UpdateCountryProps){

    if(!id){
      throw new Error('Invalid request!')
    }

    const findCountry = await prismaClient.country.findFirst({
      where: {
        id: id
      }
    })

    if(!findCountry){
      throw new Error('Country not found!')
    }

    const country = await prismaClient.country.update({
      where: { id: findCountry.id },
      data: {
        name,
        flag,
        description,
        gold_medals,
        silver_medals,
        bronze_medals
      }
    })

    return country

  }
}

export { UpdateCountryService }