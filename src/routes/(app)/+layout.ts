import { isAuthenticated } from '$lib/context/user.svelte';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	// if (!isAuthenticated()) return redirect(307, '/sign/in');
};
