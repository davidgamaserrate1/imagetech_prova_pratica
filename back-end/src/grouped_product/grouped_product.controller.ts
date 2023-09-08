import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
// import { GroupedProduct } from "./grouped_product.model";
import { GroupedProductService } from "./grouped_product.service";

@Controller('api/grouped_product')
export class GroupedProductController{
    
    constructor(protected readonly groupedProduct:GroupedProductService){}

    // @Get()
    // async getAllGroupedProduct():Promise<GroupedProduct[]>{
    //     return this.groupedProduct.getAllGroupedProducts()
    // }
    
    // // @Post()
    // // async postGroupedProducts(@Body() postData: GroupedProduct[]): Promise<GroupedProduct[]> {
    // //     return this.groupedProduct.createGroupedProducts(postData);
    // //   }
    // @Get(':id')
    // async getGroupedProduct(@Param('id') id:number):Promise<GroupedProduct[]>{
    //     return this.groupedProduct.getGroupedProduct(id)
    // }

    // @Delete(':id')
    // async deleteGroupedProduct(@Param('id') id:number):Promise<GroupedProduct>{
    //     return this.groupedProduct.deleteGroupedProduct(id)
    // }

    // @Put(':id')
    // async editGroupedProduct(@Param('id') id:number, putData:GroupedProduct):Promise<GroupedProduct>{
    //     return this.groupedProduct.updateGroupedProduct(id, putData)
    // }


  //   @Post()
  // async createGroupWithProducts(@Body() requestBody: any): Promise<GroupedProduct> {
  //   // Extrair os dados do corpo da solicitação
  //   const { id, name, descricao, valor, group_itens } = requestBody;

  //   // Criar o grupo principal
  //   const createdGroup = await this.groupedProduct.createGroupedProducts({
  //     id,
  //     name,
  //     description: descricao,
  //     value: valor,
  //     group_itens: {
  //       create: group_itens.map((item: any) => ({
  //         name: item.name,
  //         description: item.description,
  //         value: item.value,
  //         simpleProductId: item.simpleProductId,
  //       })),
  //     },
  //   });

  //   return createdGroup;
  // }
}