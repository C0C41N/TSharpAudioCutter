import { useEffect, useReducer } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, take } from 'rxjs/operators';

import { svcUtil } from './util';

const { deepEqual, randomKey } = svcUtil;

class Store {
	private bsub = new BehaviorSubject<{ [key: string]: any }>({});
	private obsv = this.bsub.asObservable();

	get = <T>(id: string): T | undefined => this.bsub.getValue()[id];

	set = <T>(id: string, data: T): void => {
		const val = this.bsub.value;
		this.bsub.next({ ...val, [id]: data });
	};

	observe = <T>(id: string): Observable<T | undefined> =>
		this.obsv.pipe(
			map(e => e[id]),
			distinctUntilChanged(deepEqual)
		);

	once = <T>(id: string) =>
		this.observe<T>(id).pipe(skip(1), take(1)).toPromise() as Promise<T>;

	state = <T>(data?: T) => {
		const key = randomKey(8);

		const set = (data: T) => this.set<T>(key, data);
		const get = () => this.get<T>(key) as T;
		const observe = this.observe<T>(key) as Observable<T>;
		const once = () => this.once<T>(key);

		if (data) set(data);

		return (reactive = true): State<T> => {
			if (reactive) {
				const forceUpdate = useReducer(x => x + 1, 0)[1];

				useEffect(() => {
					const sub = observe.subscribe(() => forceUpdate());
					return () => sub.unsubscribe();
				}, []);
			}

			return new State(get, set, observe, once);
		};
	};
}

export const svcStore = new Store();

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
