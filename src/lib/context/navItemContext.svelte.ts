export function createContextNavItem(): INavItem[] {
	return [{ id: 1, icon: 'hi1' }];
}

export interface INavItem {
	id: number;
	icon?: string;
}
let navItems: INavItem[] = $state<INavItem[]>([]);

export function resetNavItems() {
	navItems = [];
}

export function getNavItemById(id: number): INavItem | undefined {
	return navItems.find((item) => item.id === id);
}

export function setNavItem(nav: INavItem) {
	if (getNavItemById(nav.id)) {
		console.warn(`NavItem with ID ${nav.id} already exists. Not adding.`);
		return; // Don't add if it exists
	}

	navItems.push({ ...nav });
}

export function setNavItems(nav: INavItem[]) {
	navItems = nav;
}

export function getNavItems(): INavItem[] {
	return navItems;
}

export const NavItems: INavItem[] = getNavItems();
