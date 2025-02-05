import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Documents } from "./Documents";
import { Level } from "./Levels";

@Entity("Folders")
export class Folders {
  @PrimaryGeneratedColumn({ name: "id_folder" })
  idFolder!: number;

  @Column({ length: 50 })
  title!: string;

  @ManyToOne(() => Folders, (folder) => folder.subfolders, { nullable: true })
  @JoinColumn({ name: "id_subfolder" })
  parentFolder!: Folders;

  @OneToMany(() => Folders, (folder) => folder.parentFolder)
  subfolders!: Folders[];

  @ManyToOne(() => Level, (level) => level.folders, { nullable: false })
  @JoinColumn({ name: "id_level" })
  level!: Level;

  @OneToMany(() => Documents, (document) => document.folder)
  documents!: Documents[];
}
