import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: 255, unique: true})
    username: string;

    @Column({type: "varchar", length: 255})
    last_name: string;

    @Column({type: "varchar", length: 255})
    first_name: string;

    @Column({type: "varchar", length: 255})
    password: string;

    @Column({type: "varchar", length: 255, nullable : true})
    access_token: string;

    @Column({type: "varchar", length: 255, nullable: true})
    refresh_token: string;

}