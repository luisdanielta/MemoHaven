import { env } from '$env/dynamic/public';
import type { TypedPocketBase } from '$lib/core/adapter/pb/entities';
import PocketBase from 'pocketbase';
import { BaseAuthStore, type RecordModel } from 'pocketbase';

export class AuthStore extends BaseAuthStore {
	constructor() {
		super();
	}

	save(token: string, record: RecordModel | null): void {
		super.save(token, record);
		console.log('¡welcome!');
	}

	clear(): void {
		super.clear();
		console.log('CustomAuthStore: Authentication cleared.');
	}
}

function createPocketBase(): TypedPocketBase {
	const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL, new AuthStore()) as TypedPocketBase;
	pb.autoCancellation(false);

	pb.authStore.onChange(() => {
		auth = !!pb.authStore.token;
	});

	pb.authStore.exportToCookie({ secure: true });
	return pb;
}

export const pb = $state(createPocketBase());
let auth = $state(!!pb.authStore.token);

export function isAuthenticated(): boolean {
	return auth;
}

pb.authStore.onChange(() => {
	auth = !!pb.authStore.token;
});
