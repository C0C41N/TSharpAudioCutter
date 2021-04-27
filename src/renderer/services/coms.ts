import isEqual from 'lodash/isEqual';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, take } from 'rxjs/operators';

class Coms {
	private messenger = new Subject<IM<any>>();
	private $messenger = this.messenger.asObservable();

	private store = new BehaviorSubject<ST<any>>({});
	private $store = this.store.asObservable();

	constructor() {}

	fire = <T>(id: string, data: T): void => {
		this.messenger.next({ id, data });
	};

	wait = <T>(id: string): Promise<T> => {
		return this.$messenger
			.pipe(
				filter(e => e.id === id),
				map(e => <T>e.data),
				take(1)
			)
			.toPromise();
	};

	observe = <T>(id: string): Observable<T> => {
		return this.$messenger.pipe(
			filter(e => e.id === id),
			map(e => <T>e.data)
		);
	};

	set = <T>(id: string, data: T): void => {
		const val = this.store.value;
		this.store.next({ ...val, [id]: data });
	};

	get = <T>(id: string): Observable<T | undefined> => {
		return this.$store.pipe(
			map(e => e[id]),
			distinctUntilChanged(isEqual)
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
