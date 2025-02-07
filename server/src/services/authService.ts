import { Repository } from "typeorm";
import { Users } from "../models/Users";

export class AuthService {
  constructor(private userRepository: Repository<Users>) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          mail: email,
          password: password,
        },
        relations: ["role", "company", "level"],
      });

      if (!user) {
        return null;
      }

      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw new Error("Erreur lors de la validation de l'utilisateur");
    }
  }
}
