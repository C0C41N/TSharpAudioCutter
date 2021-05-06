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
