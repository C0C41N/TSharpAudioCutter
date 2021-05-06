import { useEffect, useReducer } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, take } from 'rxjs/operators';

import { svcUtil } from './util';

const { deepEqual, randomKey } = svcUtil;

const bsub = new BehaviorSubject<{ [key: string]: any }>({});
const obsv = bsub.asObservable();

export const get = <T>(id: string): T | undefined => bsub.getValue()[id];

export const set = <T>(id: string, data: T): void => {
	const val = bsub.value;
	bsub.next({ ...val, [id]: data });
};

export const observe = <T>(id: string): Observable<T | undefined> =>
	obsv.pipe(
		map(e => e[id]),
		distinctUntilChanged(deepEqual)
	);

export const once = <T>(id: string) =>
	observe<T>(id).pipe(skip(1), take(1)).toPromise() as Promise<T>;

export const state = <T>(data?: T) => {
	const key = randomKey(8);

	const sEt = (data: T) => set<T>(key, data);
	const gEt = () => get<T>(key) as T;
	const oBserve = observe<T>(key) as Observable<T>;
	const oNce = () => once<T>(key);

	if (data) sEt(data);

	return (reactive = true): State<T> => {
		if (reactive) {
			const forceUpdate = useReducer(x => x + 1, 0)[1];

			useEffect(() => {
				const sub = oBserve.subscribe(() => forceUpdate());
				return () => sub.unsubscribe();
			}, []);
		}

		return new State<T>(gEt, sEt, oBserve, oNce);
	};
};

class State<T> {
	get val() {
		return this.val_();
	}

	get once() {
		return this.once_();
	}

	constructor(
		private val_: () => T,
		public set: (data: T) => void,
		public observe: Observable<T>,
		private once_: () => Promise<T>
	) {}
}
