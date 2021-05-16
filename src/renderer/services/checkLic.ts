import type { Lic } from '@types';

const { localStorage } = window;

export const getCachedLic = () => {
	const { getItem } = localStorage;

	const val = getItem('lic');
	if (val === null) return null;

	const lic: Lic = +val;
	if (lic < 0 || lic > 3) return null;

	return lic;
};

export const setCachedLic = (lic: Lic) => {
	const { setItem } = localStorage;
	setItem('lic', lic.toString());
};
