import { Observable, Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { randomKey } from './util';

const subj = new Subject<{ id: string; data: any }>();
const obsv = subj.asObservable();

export const pub = <T>(id: string, data: T): void => subj.next({ id, data });

export const sub = <T>(id: string): Observable<T> =>
	obsv.pipe(
		filter(e => e.id === id),
		map(e => <T>e.data)
	);

export const once = <T>(id: string): Promise<T> =>
	sub<T>(id).pipe(take(1)).toPromise();

export const pubsub = <T>(): IPubSub<T> => {
	const key = randomKey(8);
	return {
		pub: (data: T) => pub<T>(key, data),
		sub: sub<T>(key),
		once: once<T>(key),
	};
};

type IPubSub<T> = {
	pub: (data: T) => void;
	sub: Observable<T>;
	once: Promise<T>;
};
