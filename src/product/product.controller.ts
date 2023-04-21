import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { ProductService } from './product.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger/dist/decorators';

@ApiTags('Products')
@Controller()
export class ProductController {

    constructor(private readonly productService : ProductService){

    }

    @Get('products')
    findAll(){
        return this.productService.findAll();
    }

    @Get('/product/:id')
    findOne(@Param('id', ParseUUIDPipe) id : string){
        return this.productService.findOne(id);
    }


    @Post('/product')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    create(@Body() createProductDto : CreateProductDto){
        return this.productService.create(createProductDto);
    }


    @Put('/product/:id')
    update(@Param('id', ParseUUIDPipe) id : string, @Body() updateProductDto : UpdateProductDto){
        return this.productService.update(id, updateProductDto);
    }


    @Delete('/product/:id')
    destroy(@Param('id', ParseUUIDPipe) id : string){
        return this.productService.destroy(id);
    }


}
