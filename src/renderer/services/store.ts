import { useEffect, useReducer } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, take } from 'rxjs/operators';

import { deepEqual, randomKey } from './util';

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

export const state = <T>(data?: T) => {
	const key = randomKey(8);

	const sEt = (data: T) => set<T>(key, data);
	const gEt = () => get<T>(key) as T;
	const oBserve = observe<T>(key) as Observable<T>;

	if (data !== undefined) sEt(data);

	return (reactive = true): State<T> =>
		new State<T>(reactive, gEt, sEt, oBserve);
};

class State<T> {
	get val() {
		return this.value();
	}
	/**
	 * will fire first time then
	 * on every change without causing
	 * forceUpdate
	 */
	public changed = (e: (v: T) => void, initial = true) => {
		useEffect(() => {
			const sub = initial
				? this.observe.subscribe(e)
				: this.observe.pipe(skip(1)).subscribe(e);
			return () => sub.unsubscribe();
		}, []);
	};

	constructor(
		reactive = true,
		private value: () => T,
		public set: (data: T) => void,
		private observe: Observable<T>
	) {
		if (reactive) {
			const forceUpdate = useReducer(x => x + 1, 0)[1];

			useEffect(() => {
				const sub = observe.subscribe(() => forceUpdate());
				return () => sub.unsubscribe();
			}, []);
		}
	}
}
