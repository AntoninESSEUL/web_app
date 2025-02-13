import { Repository } from "typeorm";
import { Users } from "../models/Users";
import { ApiError } from "../utils/errors";
import { AuthService } from "./authService";

export class UserService {
  constructor(private userRepository: Repository<Users>, private authService: AuthService) {}

  async getById(id: number): Promise<Users> {
    const user = await this.userRepository.findOne({
      where: { idUser: id },
      relations: ["role", "company", "level"],
    });
    if (!user) {
      throw ApiError.notFound(`User with id ${id} not found`);
    }
    return user;
  }

  async getAll(): Promise<Users[]> {
    return this.userRepository.find({
      relations: ["role", "company", "level"],
    });
  }

  async create(data: Partial<Users>): Promise<Users> {
    if (!data.name || !data.mail || !data.password) {
      throw ApiError.badRequest("The name, mail and password are required");
    }

    // Vérifier si l'email existe déjà
    const existingUser = await this.userRepository.findOne({
      where: { mail: data.mail },
    });
    if (existingUser) {
      throw ApiError.badRequest("Cet email est déjà utilisé");
    }

    // Hasher le mot de passe
    const hashedPassword = await this.authService.hashPassword(data.password);

    const newUser = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }

  async update(id: number, data: Partial<Users>): Promise<Users> {
    const user = await this.getById(id);

    // Si un nouveau mot de passe est fourni, le hasher
    if (data.password) {
      data.password = await this.authService.hashPassword(data.password);
    }

    Object.assign(user, data);
    return await this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepository.delete({ idUser: id });
    if (result.affected === 0) {
      throw ApiError.notFound(`User with id ${id} not found`);
    }
  }
}
