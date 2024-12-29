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
		console.log('AuthStore: Authentication cleared.');
	}
}
