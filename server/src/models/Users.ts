import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Companies } from "./Companies";
import { Level } from "./Levels";
import { Roles } from "./Roles";

@Entity("Users")
export class Users {
  @PrimaryGeneratedColumn()
  idUser!: number;

  @Column({ length: 30 })
  name!: string;

  @Column({ length: 30, nullable: true, name: "first_name" })
  firstName!: string;

  @Column({ length: 30, unique: true })
  mail!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ length: 20, nullable: true })
  phone!: string;

  @ManyToOne(() => Level, (level) => level.users)
  @JoinColumn({ name: "idLevel" })
  level!: Level;

  @ManyToOne(() => Roles, (role) => role.users)
  @JoinColumn({ name: "idRole" })
  role!: Roles;

  @ManyToOne(() => Companies, (company) => company.users)
  @JoinColumn({ name: "idCompany" })
  company!: Companies;
}
