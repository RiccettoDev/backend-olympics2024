import prismaClient from "../../prisma";

interface CreateSportsProps{
  name: string;        
  img: string;         
  description: string; 
}

class CreateSportsService{
  async execute({name, img, description}: CreateSportsProps){

    if(!name || !img || !description){
      throw new Error('Fill in all fields!')
    }

    const sports = await prismaClient.sports.create({
      data: {
        name,
        img,
        description,
        status: true
      }
    })

    return sports

  }
}

export { CreateSportsService }