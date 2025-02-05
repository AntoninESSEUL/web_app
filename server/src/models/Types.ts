import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Documents } from "./Documents";

@Entity("Types")
export class Types {
  @PrimaryGeneratedColumn({ name: "id_type" })
  idType!: number;

  @Column({ length: 30, unique: true })
  name!: string;

  @OneToMany(() => Documents, (document) => document.type)
  documents!: Documents[];
}
