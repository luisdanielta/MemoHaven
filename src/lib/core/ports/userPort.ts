import type { IUser } from '../domain/entities/user';
import type { IUserRepository } from '../domain/repositories/userRepository';

export class UserService {
	constructor(private userRepository: IUserRepository) {}

	async createUser(user: IUser): Promise<IUser> {
		return this.userRepository.create(user);
	}

	async getUserById(id: string): Promise<IUser | null> {
		return this.userRepository.findById(id);
	}

	async getAllUsers(): Promise<IUser[]> {
		return this.userRepository.findAll();
	}

	async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
		return this.userRepository.update(id, data);
	}

	async deleteUser(id: string): Promise<boolean> {
		return this.userRepository.delete(id);
	}

	async signIn() {}
}
