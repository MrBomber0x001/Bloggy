import { Article } from '@prisma/client'
import { Context } from '../index'
interface ArticlePayloadArgs {
    article: {
        title?: string
        content?: string
    }
}

interface ArticlePayloadType {
    userErrors: {
        message: string
    }[],
    article: Article | null
}
export const Mutation = {
    articleCreate: async (_: any, { article }: ArticlePayloadArgs, { prisma }: Context): Promise<ArticlePayloadType> => {
        const { title, content } = article
        if (!title || !content) {
            return {
                userErrors: [{
                    message: "You must provide title and content"
                }],
                article: null
            }
        }
        const articleRes = await prisma.article.create({
            data: {
                title,
                content,
                authorId: 1
            }
        })

        return {
            userErrors: [],
            article: articleRes,
        }
    },

    articleUpdate: async (_: any, { article, articleId }: { article: ArticlePayloadArgs["article"], articleId: string }, { prisma }: Context): Promise<ArticlePayloadType> => {
        const { title, content } = article
        if (!title || !content) {
            return {
                userErrors: [{
                    message: "You must provide title and content"
                }],
                article: null
            }
        }

        const existingArticle = await prisma.article.findUnique({
            where: {
                id: Number(articleId)
            }
        })

        if (!existingArticle) {
            return {
                userErrors: [
                    {
                        message: "Article doesn't exist"
                    }
                ],
                article: null
            }
        }
        let payloadToUpdate = <ArticlePayloadArgs["article"]>{
            title,
            content
        }

        if (!title) delete payloadToUpdate.title;
        if (!content) delete payloadToUpdate.content;

        const updatedArticle = await prisma.article.update({
            data: {
                ...payloadToUpdate
            },
            where: {
                id: Number(articleId)
            }
        })
        return {
            userErrors: [],
            article: updatedArticle
        }
    }
}