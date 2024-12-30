import type { IUser } from '$lib/core/domain/entities/user';

export const user = $state<IUser | null>(null);
export const isAuthenticated = () => !!user;
export const isAdmin = () => !!user?.admin;
