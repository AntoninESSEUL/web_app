import bcrypt from "bcryptjs";
import { Repository } from "typeorm";
import { Users } from "../models/Users";

export class AuthService {
  private readonly SALT_ROUNDS = 10;

  constructor(private userRepository: Repository<Users>) {}

  async validateUser(email: string, password: string): Promise<Users | null> {
    try {
      const user = await this.userRepository.findOne({
        where: { mail: email },
      });

      if (!user) {
        return null;
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return null;
      }

      return user;
    } catch (error) {
      console.error("Error in validateUser:", error);
      throw new Error("Something went wrong in the authentication process");
    }
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT_ROUNDS);
  }
}
