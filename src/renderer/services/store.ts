import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

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

	/**
	 * returns [val: T | undefined, set: (data: T) => void, get: Observable<T | undefined>]
	 */
	state = <T>(): IState<T> => {
		const key = randomKey(8);
		const val = this.val<T>(key);
		const set = (data: T) => this.set<T>(key, data);
		const get = this.get<T>(key);
		return [val, set, get];
	};
}

export const svcStore = new Store();

type IState<T> = [T | undefined, (data: T) => void, Observable<T | undefined>];
