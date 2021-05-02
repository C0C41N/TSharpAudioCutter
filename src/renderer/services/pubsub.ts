import { Observable, Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { svcUtil } from './util';

const { randomKey } = svcUtil;

class PubSub {
	private subj = new Subject<{ id: string; data: any }>();
	private obsv = this.subj.asObservable();

	pub = <T>(id: string, data: T): void => this.subj.next({ id, data });

	sub = <T>(id: string): Observable<T> =>
		this.obsv.pipe(
			filter(e => e.id === id),
			map(e => <T>e.data)
		);

	once = <T>(id: string): Promise<T> =>
		this.sub<T>(id).pipe(take(1)).toPromise();

	pubsub = <T>(): IPubSub<T> => {
		const key = randomKey(8);
		const pub = (data: T) => this.pub<T>(key, data);
		const sub = this.sub<T>(key);
		const once = this.once<T>(key);
		return { pub, sub, once };
	};
}

export const svcPubSub = new PubSub();

type IPubSub<T> = {
	pub: (data: T) => void;
	sub: Observable<T>;
	once: Promise<T>;
};
