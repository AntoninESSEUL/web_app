import { Optional } from "sequelize";
import { Table, Column, Model, DataType } from "sequelize-typescript";

interface RoleAttributes {
  id_roles: number;
  name: string;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, "id_roles"> {}

@Table({
  tableName: "roles",
  timestamps: false,
})
class Role extends Model<RoleAttributes, RoleCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id_roles!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  name!: string;
}

export { Role, RoleAttributes, RoleCreationAttributes };
