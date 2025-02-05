import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Companies } from "./Companies";
import { Level } from "./Levels";
import { Roles } from "./Roles";

@Entity("Users")
export class Users {
  @PrimaryGeneratedColumn({ name: "id_user" })
  idUser!: number;

  @Column({ length: 30 })
  name!: string;

  @Column({ name: "first_name", length: 30 })
  firstName!: string;

  @Column({ length: 30, unique: true })
  mail!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ length: 20, nullable: true })
  phone!: string;

  @ManyToOne(() => Level, (level) => level.users, { nullable: false })
  @JoinColumn({ name: "id_level" })
  level!: Level;

  @ManyToOne(() => Roles, (role) => role.users, { nullable: false })
  @JoinColumn({ name: "id_role" })
  role!: Roles;

  @ManyToOne(() => Companies, (company) => company.users, { nullable: false })
  @JoinColumn({ name: "id_company" })
  company!: Companies;
}
