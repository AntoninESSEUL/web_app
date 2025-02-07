import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Folders } from "./Folders";
import { Users } from "./Users";

@Entity("Level")
export class Level {
  @PrimaryGeneratedColumn()
  idLevel!: number;

  @Column({ unique: true })
  level!: number;

  @Column({ length: 1000, nullable: true })
  description!: string;

  @OneToMany(() => Users, (user) => user.level)
  users!: Users[];

  @OneToMany(() => Folders, (folder) => folder.level)
  folders!: Folders[];
}
