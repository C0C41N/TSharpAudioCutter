import { useEffect, useReducer } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, take } from 'rxjs/operators';

import { svcUtil } from './util';

const { deepEqual, randomKey } = svcUtil;

class Store {
	private bsub = new BehaviorSubject<{ [key: string]: any }>({});
	private obsv = this.bsub.asObservable();

	val = <T>(id: string): T | undefined => this.bsub.getValue()[id];

	set = <T>(id: string, data: T): void => {
		const val = this.bsub.value;
		this.bsub.next({ ...val, [id]: data });
	};

	get = <T>(id: string): Observable<T | undefined> =>
		this.obsv.pipe(
			map(e => e[id]),
			distinctUntilChanged(deepEqual)
		);

	once = <T>(id: string) =>
		this.get<T>(id).pipe(skip(1), take(1)).toPromise() as Promise<T>;

	state = <T>(data?: T) => {
		const key = randomKey(8);

		const set = (data: T) => this.set<T>(key, data);
		const val = () => this.val<T>(key) as T;
		const get = this.get<T>(key) as Observable<T>;
		const once = () => this.once<T>(key);

		if (data) set(data);

		return (reactive = true): IState<T> => {
			if (reactive) {
				const forceUpdate = useReducer(x => x + 1, 0)[1];

				useEffect(() => {
					const sub = get.subscribe(() => forceUpdate());
					return () => sub.unsubscribe();
				}, []);
			}

			return { val, set, get, once };
		};
	};
}

export const svcStore = new Store();

type IState<T> = {
	val: () => T;
	set: (data: T) => void;
	get: Observable<T>;
	once: () => Promise<T>;
};
