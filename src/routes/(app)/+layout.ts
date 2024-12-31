import { authService } from '$lib/core/ports/authPort';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	if (!authService.isAuthenticated()) return redirect(307, '/sign/in');
};
