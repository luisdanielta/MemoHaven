export interface INavFloat {
	editable: boolean;
}

export function createContextNavFloat(): INavFloat | null {
	return { editable: false };
}

let navFloat: INavFloat | null = $state<INavFloat | null>(createContextNavFloat());

export function setNavFloat(nav: INavFloat) {
	navFloat = nav;
}

export function getNavFloat(): INavFloat | null {
	return navFloat;
}

export const NavFloat: INavFloat | null = getNavFloat();
