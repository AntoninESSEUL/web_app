import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role } from "./models/Role";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "rootpassword",
  database: "mydb",
  entities: [Role],
  synchronize: true,
  logging: true,
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(async () => {
    // Create a new role instance and save it to the database
    const role = new Role();
    role.name = "Role 2";

    const roleRepository = AppDataSource.getRepository(Role);
    await roleRepository.save(role);
    console.log("Role has been saved");

    // Fetch all roles from the database
    const savedRoles = await roleRepository.find();
    console.log("All roles from the db: ", savedRoles);
  })
  .catch((error) => console.log(error));
