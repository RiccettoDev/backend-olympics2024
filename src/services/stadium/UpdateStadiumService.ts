import prismaClient from "../../prisma";

interface UpdateStadiumProps{
  id: string
  name: string
  img: string
  description: string
  capacity: string; 
}

class UpdateStadiumService{
  async execute({ id, name, img, description, capacity }: UpdateStadiumProps){

    if(!id){
      throw new Error('Invalid request!')
    }

    const findStadium = await prismaClient.stadium.findFirst({
      where: {
        id: id
      }
    })

    if(!findStadium){
      throw new Error('Stadium not found!')
    }

    const stadium = await prismaClient.stadium.update({
      where: { id: findStadium.id },
      data: {
        name,
        img,
        description,
        capacity
      }
    })

    return stadium

  }
}

export { UpdateStadiumService }