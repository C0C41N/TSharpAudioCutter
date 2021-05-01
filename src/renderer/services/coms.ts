import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, take } from 'rxjs/operators';

import { svcUtil } from './util';

const { deepEqual } = svcUtil;

class Coms {
	private portal = new Subject<IM<any>>();
	private $portal = this.portal.asObservable();

	private state = new BehaviorSubject<ST<any>>({});
	private $state = this.state.asObservable();

	constructor() {}

	fire = <T>(id: string, data: T): void => {
		this.portal.next({ id, data });
	};

	wait = <T>(id: string): Promise<T> => {
		return this.$portal
			.pipe(
				filter(e => e.id === id),
				map(e => <T>e.data),
				take(1)
			)
			.toPromise();
	};

	observe = <T>(id: string): Observable<T> => {
		return this.$portal.pipe(
			filter(e => e.id === id),
			map(e => <T>e.data)
		);
	};

	set = <T>(id: string, data: T): void => {
		const val = this.state.value;
		this.state.next({ ...val, [id]: data });
	};

	get = <T>(id: string): Observable<T | undefined> => {
		return this.$state.pipe(
			map(e => e[id]),
			distinctUntilChanged(deepEqual)
		);
	};
}

interface IM<T> {
	id: string;
	data: T;
}

interface ST<T> {
	[key: string]: T;
}

export const svcComs = new Coms();
