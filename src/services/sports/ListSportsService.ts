import prismaClient from "../../prisma";

class ListSportsService{
  async execute(){
    const sports = await prismaClient.sports.findMany()
    return sports
  }
}

export { ListSportsService }