import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Documents } from "./Documents";
import { Level } from "./Levels";

@Entity("Folders")
export class Folders {
  @PrimaryGeneratedColumn()
  idFolder!: number;

  @Column({ length: 50 })
  title!: string;

  @ManyToOne(() => Folders, (folder) => folder.childFolders)
  @JoinColumn({ name: "idParentFolder" })
  parentFolder!: Folders | null;

  @OneToMany(() => Folders, (folder) => folder.parentFolder)
  childFolders!: Folders[];

  @ManyToOne(() => Level, (level) => level.folders)
  @JoinColumn({ name: "idLevel" })
  level!: Level;

  @OneToMany(() => Documents, (document) => document.folder)
  documents!: Documents[];
}
