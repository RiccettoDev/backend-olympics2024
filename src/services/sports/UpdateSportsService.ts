import prismaClient from "../../prisma";

interface UpdateSportsProps{
  id: string
  name: string
  img: string
  description: string
}

class UpdateSportsService{
  async execute({ id, name, img, description }: UpdateSportsProps){

    if(!id){
      throw new Error('Invalid request!')
    }

    const findSports = await prismaClient.sports.findFirst({
      where: {
        id: id
      }
    })

    if(!findSports){
      throw new Error('Sports not found!')
    }

    const sports = await prismaClient.sports.update({
      where: { id: findSports.id },
      data: {
        name,
        img,
        description,
      }
    })

    return sports

  }
}

export { UpdateSportsService }