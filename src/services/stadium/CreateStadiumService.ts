import prismaClient from "../../prisma";

interface CreateStadiumProps{
  name: string;        
  img: string;         
  description: string; 
  capacity: string;    
}

class CreateStadiumService{
  async execute({name, img, description, capacity}: CreateStadiumProps){

    if(!name || !img || !description || !capacity){
      throw new Error('Fill in all fields!')
    }

    const stadium = await prismaClient.stadium.create({
      data: {
        name,
        img,
        description,
        capacity,
        status: true
      }
    })

    return stadium

  }
}

export { CreateStadiumService }