import { IsString, IsNotEmpty, IsNumber, IsOptional, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";
export class ProductDto{
    
    
    @IsUUID()
    public id : number;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public name : string;


    @ApiProperty()
    @IsString()
    public description : string;

    @ApiProperty()
    @IsNumber()
    public price : number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public size : string;

    @ApiProperty()
    @IsString()
    public created_at : string;

    @ApiProperty()
    @IsString()
    public updated_at : string | null;
}


export class CreateProductDto{
    @ApiProperty({
        description : "Product Name",
        example : "Mens Cotton Jacket"
    })
    @IsString()
    @IsNotEmpty()
    public name : string;

    @ApiProperty({
        description : "Product Description",
        example : "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working...."
    })
    @IsString()
    public description : string;

    @ApiProperty({
        description : "Product Price",
        example : "9.5"
    })
    @IsNumber()
    public price : number;

    @ApiProperty({
        description : "Product Size",
        example : "S, M, L, XL"
    })
    @IsString()
    @IsNotEmpty()
    public size : string;
}



export class UpdateProductDto{

    @ApiProperty({
        description : "Product Name",
        example : "Mens Cotton Jacket"
    })
    @IsOptional()
    @IsString()
    public name : string;

    @ApiProperty({
        description : "Product Description",
        example : "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working...."
    })
    @IsOptional()
    @IsString()
    public description : string;

    @ApiProperty({
        description : "Product Price",
        example : "9.5"
    })
    @IsOptional()
    @IsNumber()
    public price : number;

    @ApiProperty({
        description : "Product Size",
        example : "S, M, L, XL"
    })
    @IsOptional()
    @IsString()
    public size : string;
}
