import { Repository } from "typeorm";
import { Users } from "../models/Users";
import { ApiError } from "../utils/errors";

export class UserService {
  constructor(private userRepository: Repository<Users>) {}

  // get a user by id
  async getById(id: number): Promise<Users> {
    const user = await this.userRepository.findOne({ where: { idUser: id } });
    if (!user) {
      throw ApiError.notFound(`User with id ${id} not found`);
    }
    return user;
  }

  // get all users
  async getAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  // create a new user
  async create(data: Partial<Users>): Promise<Users> {
    if (!data.name || !data.mail || !data.password) {
      throw ApiError.badRequest("The name, mail and password are required");
    }
    const newUser = this.userRepository.create(data);
    return await this.userRepository.save(newUser);
  }

  // update a user
  async update(id: number, data: Users): Promise<Users> {
    const user = await this.getById(id);
    Object.assign(user, data);
    return await this.userRepository.save(user);
  }

  // delete a user
  async delete(id: number): Promise<void> {
    const result = await this.userRepository.delete({ idUser: id });
    if (result.affected === 0) {
      throw ApiError.notFound(`User with id ${id} not found`);
    }
  }
}
