import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity('products') 
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type : 'varchar' , length : 255, nullable : false})
    name : string;

    @Column({type : 'varchar' , length : 255, nullable : false})
    size : string;

    @Column({type : 'text', nullable : true})
    description : string;

    @Column({type : 'float', nullable : false,})
    price : number;

    @Column({type: 'timestamptz', default : () => "CURRENT_TIMESTAMP"})
    created_at : Date;


    @Column({type: 'timestamptz', default: null})
    updated_at : Date;

}