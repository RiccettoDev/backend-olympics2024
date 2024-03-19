import prismaClient from "../../prisma";

interface DeleteStadiumProps{
  id: string
}

class DeleteStadiumService{
  async execute({ id }: DeleteStadiumProps){

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

    await prismaClient.stadium.delete({
      where: {
        id: findStadium.id
      }
    })

    return {message: 'Successfully deleted!'}

  }
}

export { DeleteStadiumService }