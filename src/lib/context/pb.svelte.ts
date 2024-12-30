import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
import type { TypedPocketBase } from '$lib/core/adapter/pb/entities';
import PocketBase from 'pocketbase';

function createPocketBase(): TypedPocketBase {
	const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL) as TypedPocketBase;
	if (browser) {
		pb.authStore.loadFromCookie(document.cookie);
	}
	// FIXME: is this a bug? Should it return an empty object or error if run with SSR?
	return pb;
}

export const pb = $state(createPocketBase());
