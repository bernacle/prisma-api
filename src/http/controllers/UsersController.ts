import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email, name } = request.body

        const result = await prisma.user.create({
            data: {
                email: email,
                name: name
            }, select: {
                id: true
            }
        })

        return response.status(201).json(result)

    }

    async show(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const result = await prisma.user.findOne({
            where: { id: parseInt(id) }
        })

        return response.status(200).json(result)
    }

    async index(request: Request, response: Response): Promise<Response> {

        const result = await prisma.user.findMany()

        return response.status(200).json(result)
    }

    async update(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const { email } = request.body


        const result = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { email: email },
            select: {
                id: true
            }
        })

        return response.status(200).json(result)
    }

    async delete(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        await prisma.user.delete({
            where: { id: parseInt(id) }
        })

        return response.status(204).send()
    }
}
