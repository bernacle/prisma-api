import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class PostsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { authorId, title } = request.body

        const result = await prisma.post.create({
            data: {
                title: title,
                User: {
                    connect: { id: authorId }
                }
            }, select: {
                id: true
            }
        })

        return response.status(201).json(result)

    }

    async show(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const result = await prisma.post.findOne({
            where: { id: parseInt(id) }
        })

        return response.status(200).json(result)
    }

    async index(request: Request, response: Response): Promise<Response> {

        const result = await prisma.post.findMany()

        return response.status(200).json(result)
    }

    async update(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const { title } = request.body

        const result = await prisma.post.update({
            where: { id: parseInt(id) },
            data: { title: title },
            select: {
                id: true
            }
        })

        return response.status(200).json(result)
    }

    async delete(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        await prisma.post.delete({
            where: { id: parseInt(id) }
        })

        return response.status(204).send()
    }
}
