import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "./Categories";
import { Folders } from "./Folders";
import { Types } from "./Types";

@Entity("Documents")
export class Documents {
  @PrimaryGeneratedColumn()
  idDocument!: number;

  @Column({ length: 255, unique: true })
  link!: string;

  @Column({ length: 50 })
  title!: string;

  @Column({ length: 1000, nullable: true })
  description!: string;

  @ManyToOne(() => Folders, (folder) => folder.documents)
  @JoinColumn({ name: "idFolder" })
  folder!: Folders;

  @ManyToOne(() => Types, (type) => type.documents)
  @JoinColumn({ name: "idType" })
  type!: Types;

  @ManyToMany(() => Categories, (category) => category.documents)
  @JoinTable({
    name: "Documents_Categories",
    joinColumn: {
      name: "idDocument",
      referencedColumnName: "idDocument",
    },
    inverseJoinColumn: {
      name: "idCategory",
      referencedColumnName: "idCategory",
    },
  })
  categories!: Categories[];
}
