import prismaClient from "../../prisma";

class ListStadiumService{
  async execute(){
    const stadium = await prismaClient.stadium.findMany()
    return stadium
  }
}

export { ListStadiumService }