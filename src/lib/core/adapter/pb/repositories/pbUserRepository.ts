import { pb } from '$lib/context/pb.svelte';
import type { IUser } from '$lib/core/domain/entities/user';
import type { IUserRepository } from '$lib/core/domain/repositories/userRepository';

export class PbUserRepository implements IUserRepository {
	async create(IUser: IUser): Promise<IUser> {
		return await pb.collection('users').create(IUser);
	}

	async findById(id: string): Promise<IUser | null> {
		return await pb.collection('users').getOne(id);
	}

	findAll(): Promise<IUser[]> {
		throw new Error('Method not implemented.');
	}

	update(id: string, data: Partial<IUser>): Promise<IUser | null> {
		return pb.collection('users').update(id, data);
	}

	async delete(id: string): Promise<boolean> {
		try {
			await pb.collection('users').delete(id);
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}

	async findByIUsername(IUsername: string): Promise<IUser | null> {
		const users = await pb.collection('users').getFullList({
			filter: `username="${IUsername}"`
		});
		return users.length > 0 ? (users[0] as IUser) : null;
	}
}
