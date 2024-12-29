import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
import type { ClientResponseError, TypedPocketBase } from '$lib/core/domain/pb';
import type { PbUser } from '$lib/core/domain/pb/user';
import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const user = $state<PbUser | null>(null);
export const isAuthenticated = () => !!user;
export const isAdmin = () => !!user?.admin;

export const pbError = (e: unknown) => {
	const err = e as ClientResponseError;
	error(err?.status, err?.response?.message);
};

function createPocketBase(): TypedPocketBase {
	const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL) as TypedPocketBase;
	if (browser) {
		pb.authStore.loadFromCookie(document.cookie);
	}
	// FIXME: is this a bug? Should it return an empty object or error if run with SSR?
	return pb;
}

export const pb = $state(createPocketBase());
