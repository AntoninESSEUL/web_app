import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["name"])
export class Role {
  @PrimaryGeneratedColumn()
  id_roles!: number;

  @Column({ length: 20 })
  name!: string;
}
