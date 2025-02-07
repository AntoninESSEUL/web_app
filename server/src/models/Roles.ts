import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity("Roles")
export class Roles {
  @PrimaryGeneratedColumn()
  idRole!: number;

  @Column({ length: 20, unique: true })
  name!: string;

  @OneToMany(() => Users, (user) => user.role)
  users!: Users[];
}
