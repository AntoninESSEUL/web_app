import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "./Categories";
import { Folders } from "./Folders";
import { Types } from "./Types";

@Entity("Documents")
export class Documents {
  @PrimaryGeneratedColumn({ name: "id_document" })
  idDocument!: number;

  @Column({ length: 255, unique: true })
  link!: string;

  @Column({ length: 50 })
  title!: string;

  @Column({ length: 1000, nullable: true })
  description!: string;

  @ManyToOne(() => Folders, (folder) => folder.documents, { nullable: false })
  @JoinColumn({ name: "id_folder" })
  folder!: Folders;

  @ManyToOne(() => Types, (type) => type.documents, { nullable: false })
  @JoinColumn({ name: "id_type" })
  type!: Types;

  @ManyToMany(() => Categories, (category) => category.documents)
  @JoinTable({
    name: "Documents_Categories",
    joinColumn: {
      name: "id_document",
      referencedColumnName: "idDocument",
    },
    inverseJoinColumn: {
      name: "id_category",
      referencedColumnName: "idCategory",
    },
  })
  categories!: Categories[];
}
