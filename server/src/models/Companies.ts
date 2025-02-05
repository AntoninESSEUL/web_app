import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity("Companies")
export class Companies {
  @PrimaryGeneratedColumn({ name: "id_company" })
  idCompany!: number;

  @Column({ length: 50, unique: true })
  name!: string;

  @OneToMany(() => Users, (user) => user.company)
  users!: Users[];
}
