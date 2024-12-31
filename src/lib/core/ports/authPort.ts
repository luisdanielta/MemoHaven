import { pb } from '$lib/context/pb.svelte';
import type { IUser } from '$lib/core/domain/entities/user';
import type { TypedPocketBase } from '../adapter/pb/entities';
import type { PbUser } from '../adapter/pb/entities/user';

export interface IAuthService {
	signIn(username: string, password: string): void;
	signOut(): Promise<void>;
}

export class AuthService implements IAuthService {
	private client: TypedPocketBase;
	private static userState: IUser | null;

	public async getContextUser(): Promise<IUser | null> {
		return AuthService.userState;
	}

	public async setContextUser(newUser: IUser | null) {
		if (newUser) {
			AuthService.userState = { ...newUser };
		} else {
			AuthService.userState = null;
		}
	}

	public isAuthenticated(): boolean {
		return !!AuthService.userState;
	}

	constructor(client: TypedPocketBase) {
		this.client = client;
	}

	/**
	 * Logs in the user with the provided credentials.
	 * @param username - The username of the user.
	 * @param password - The password of the user.
	 * @returns IUser - Authenticated user data.
	 */

	async signIn(username: string, password: string) {
		const authData = await this.client.collection('users').authWithPassword(username, password);
		console.log(authData);
		const user: IUser = this.mapPocketBaseUser(authData.record);
		this.setContextUser(user);
	}

	async signOut(): Promise<void> {
		this.client.authStore.clear();
	}

	/**
	 * Maps PocketBase user data to the application's IUser interface.
	 * @param pbUser - PocketBase user object.
	 * @returns IUser - Mapped user entity.
	 */
	private mapPocketBaseUser(pbUser: PbUser): IUser {
		return {
			avatar: pbUser.avatar,
			name: pbUser.name,
			username: pbUser.username,
			email: pbUser.email,
			admin: pbUser.admin
		};
	}
}

export const authService = new AuthService(pb);
