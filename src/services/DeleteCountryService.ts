import prismaClient from "../prisma"

interface DeleteCountryProps{
  id: string
}

class DeleteCountryService{
  async execute({ id }: DeleteCountryProps){

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

    await prismaClient.country.delete({
      where: {
        id: findCountry.id
      }
    })

    return { message: 'Successfully deleted!' }

  }
}

export { DeleteCountryService }