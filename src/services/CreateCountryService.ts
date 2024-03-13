import prismaClient from "../prisma";

interface CreateCountryProps{
  name: string; 
  flag: string; 
  description: string; 
  gold_medals: string; 
  silver_medals: string; 
  bronze_medals: string;
}

class CreateCountryService{
  async execute({ name, flag, description, gold_medals, silver_medals, bronze_medals }: CreateCountryProps){
    
    if(!name || !flag || !description || !gold_medals || !silver_medals || !bronze_medals){
      throw new Error('Fill in all fields!')
    }

    const country = await prismaClient.country.create({
      data: {
        name,
        flag,
        description,
        gold_medals,
        silver_medals,
        bronze_medals,
        status: true
      }
    })
    
    return country
  }
}

export { CreateCountryService }