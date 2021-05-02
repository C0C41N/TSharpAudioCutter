import { Observable, Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { svcUtil } from './util';

const { randomKey } = svcUtil;

class PubSub {
	private subj = new Subject<{ id: string; data: any }>();
	private obsv = this.subj.asObservable();

	pub = <T>(id: string, data: T): void => {
		this.subj.next({ id, data });
	};

	once = <T>(id: string): Promise<T> => {
		return this.obsv
			.pipe(
				filter(e => e.id === id),
				map(e => <T>e.data),
				take(1)
			)
			.toPromise();
	};

	sub = <T>(id: string): Observable<T> => {
		return this.obsv.pipe(
			filter(e => e.id === id),
			map(e => <T>e.data)
		);
	};

	/**
	 * returns [pub: (data) => void, once: Promise, sub: Observable]
	 */
	pubsub = <T>(): IPubSub<T> => {
		const key = randomKey(8);
		const fire = (data: T) => this.pub<T>(key, data);
		const wait = this.once<T>(key);
		const observe = this.sub<T>(key);
		return [fire, wait, observe];
	};
}

export const svcPubSub = new PubSub();

type IPubSub<T> = [(data: T) => void, Promise<T>, Observable<T>];
