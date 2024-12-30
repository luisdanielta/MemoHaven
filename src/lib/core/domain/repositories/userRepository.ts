import type { IUser } from '../entities/user';

export interface IUserRepository {
	create(IUser: IUser): Promise<IUser>;
	findById(id: string): Promise<IUser | null>;
	findAll(): Promise<IUser[]>;
	update(id: string, data: Partial<IUser>): Promise<IUser | null>;
	delete(id: string): Promise<boolean>;
	findByIUsername(IUsername: string): Promise<IUser | null>;
}
