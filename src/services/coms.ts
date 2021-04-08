import { Observable, Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

class Coms {
  private messenger = new Subject<IM<any>>();
  private $messenger = this.messenger.asObservable();

  constructor() {}

  fire = <T>(id: string, data: T): void => {
    this.messenger.next({ id, data });
  };

  wait = <T>(id: string): Promise<T> => {
    return this.$messenger
      .pipe(
        filter((e) => e.id === id),
        map((e) => <T>e.data),
        take(1),
      )
      .toPromise();
  };

  observe = <T>(id: string): Observable<T> => {
    return this.$messenger.pipe(
      filter((e) => e.id === id),
      map((e) => <T>e.data),
    );
  };
}

interface IM<T> {
  id: string;
  data: T;
}

export const svcComs = new Coms();
