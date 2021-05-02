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

	once = <T>(id: string): Promise<T | undefined> =>
		this.get<T>(id).pipe(skip(1), take(1)).toPromise();

	state = <T>(data?: T): IState<T> => {
		const key = randomKey(8);
		const set = (data: T) => this.set<T>(key, data);
		const val = () => this.val<T>(key);
		const get = this.get<T>(key);
		const once = () => this.once<T>(key);

		if (data) set(data);

		return { val, set, get, once };
	};
}

export const svcStore = new Store();

type IState<T> = {
	val: () => T | undefined;
	set: (data: T) => void;
	get: Observable<T | undefined>;
	once: () => Promise<T | undefined>;
};
