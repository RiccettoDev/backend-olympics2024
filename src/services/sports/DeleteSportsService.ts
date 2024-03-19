import prismaClient from "../../prisma";

interface DeleteSportsProps{
  id: string
}

class DeleteSportsService{
  async execute({ id }: DeleteSportsProps){

    if(!id){
      throw new Error('Invalid request!')
    }

    const findSports = await prismaClient.sports.findFirst({
      where: {
        id: id
      }
    })

    if(!findSports){
      throw new Error('Stadium not found!')
    }

    await prismaClient.sports.delete({
      where: {
        id: findSports.id
      }
    })

    return {message: 'Successfully deleted!'}

  }
}

export { DeleteSportsService }