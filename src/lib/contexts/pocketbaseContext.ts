import PocketBase from 'pocketbase';
import { writable, type Writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import { AuthStore } from '$lib/state/authStore';

export interface PocketBaseContext {
	client: PocketBase;
	isAuthenticated: Writable<boolean>;
}

const POCKETBASE_CONTEXT_KEY = Symbol();

export function CreatePocketBaseContext(baseUrl: string): PocketBaseContext {
	const client = new PocketBase(baseUrl, new AuthStore());

	const isAuthenticated = writable(!!client.authStore.token);

	client.authStore.onChange(() => {
		isAuthenticated.set(!!client.authStore.token);
	});

	const context: PocketBaseContext = { client, isAuthenticated };
	setContext(POCKETBASE_CONTEXT_KEY, context);
	return context;
}

export function GetPocketBaseContext(): PocketBaseContext {
	const context = getContext<PocketBaseContext>(POCKETBASE_CONTEXT_KEY);
	if (!context) {
		throw new Error('PocketBaseContext not found. Did you forget to set it in your layout?');
	}
	return context;
}
