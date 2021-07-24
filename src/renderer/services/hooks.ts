import { useEffect } from 'react';

export const useListenEvent = (
	el: HTMLElement | Document,
	event: string,
	callback: (e: Event) => void
) => {
	useEffect(() => {
		el.addEventListener(event, callback);
		return () => el.removeEventListener(event, callback);
	}, [callback]);
};

export const useAsyncEffect = (
	callback: () => Promise<void | (() => void)>,
	dependencies?: any[]
) =>
	useEffect(() => {
		callback();
	}, dependencies);

export const usePasteOnRClick = (el: HTMLInputElement | null) => {
	const callback = async () => {
		if (!el) return console.log('null');
		const text = await navigator.clipboard.readText();
		el.value = text;
	};
	useAsyncEffect(async () => {
		if (!el) return console.log('null');
		el.addEventListener('contextmenu', callback);
		return () => el.removeEventListener('contextmenu', callback);
	}, [el]);
};
