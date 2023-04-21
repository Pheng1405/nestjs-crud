import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto, ProductDto, UpdateProductDto } from './product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
    
    constructor(@InjectRepository(ProductEntity) private readonly productRepository : Repository<ProductEntity>){}

    async create(createProduct : CreateProductDto){
        const newProduct = this.productRepository.create(createProduct);
        return await this.productRepository.save(newProduct);
    }

    async findOne(productId : string){
        const product = await this.productRepository.findOne({
            where:{
                id : productId
            }
        });

        if(!product){
            throw new HttpException(
                `Product id = ${productId} couldn't found`,
                HttpStatus.NOT_FOUND
            );
        }

        return product;
    }

    async findAll(){
        const products  = await this.productRepository.find({});

        if(!products){
            throw new HttpException(
                "Couldn't found any product",
                HttpStatus.NOT_FOUND
            );
        }

        return products;
    }

    async destroy(productId : string){
        const product = await this.productRepository.findOne({where : {id : productId}});

        if(!product){
            throw new HttpException(
                `Product id = ${productId} couldn't found`,
                HttpStatus.NOT_FOUND
            )
        }

        await product.remove();

        return `Product id = ${productId} deleted`;
    }

    async update(productId : string, updateProduct : UpdateProductDto){
        const product = await this.productRepository.findOne({where: {id : productId}});

        if(!product){
            throw new HttpException(
                `Product id = ${productId} couldn't found`,
                HttpStatus.NOT_FOUND
            )
        }

        product.name = updateProduct.name || product.name;
        product.price = updateProduct.price || product.price;
        product.size = updateProduct.size || product.size;
        product.description = updateProduct.description || product.description;
        
        product.save();

        return product;
    }


}
