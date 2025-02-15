import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Documents } from "./Documents";

@Entity("Categories")
export class Categories {
  @PrimaryGeneratedColumn()
  idCategory!: number;

  @Column({ length: 20, unique: true })
  name!: string;

  @ManyToMany(() => Documents, (document) => document.categories)
  documents!: Documents[];
}
