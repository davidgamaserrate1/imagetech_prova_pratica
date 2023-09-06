import { PrismaService } from "src/prisma_service";
import { SimpleProduct } from "./simple_product.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class SimpleProductService{

    constructor(private prisma:PrismaService){}

    async getAllSimpleProductService():Promise<SimpleProduct[]>{
         return this.prisma.simpleProduct.findMany()
    }

    async getSimpleProductService(id:number): Promise<SimpleProduct | null>{
        return this.prisma.simpleProduct.findUnique({where: {id:Number(id)}})
    }

    async createSimpleProduct(data: SimpleProduct): Promise<SimpleProduct>{
        return this.prisma.simpleProduct.create({
            data,
        })
    }

    async updateSimpleProduct(id:Number, data:SimpleProduct): Promise<SimpleProduct>{
        return this.prisma.simpleProduct.update({
            where:{id: Number(id)},
            data:{description:data.description, value:data.value}
        })
    }

    async deleteSimpleProduct(id:Number):Promise<SimpleProduct>{
        return this.prisma.simpleProduct.delete({
            where:{id: Number(id)}
        })
    }
}