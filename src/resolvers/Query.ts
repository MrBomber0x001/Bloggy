import { Context } from './../index';
export const Query = {
    articles: async (_: any, __: any, { prisma }: Context) => {
        const articles = await prisma.article.findMany({
            orderBy: [{
                createdAt: "desc"
            }]
        })

        return articles
    }
}