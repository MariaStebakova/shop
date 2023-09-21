import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let clonedRequest: HttpRequest<unknown>;
    if (request.method === 'GET') {
      clonedRequest = request.clone({
        params: new HttpParams()
          .set('startTime', Date.now())
      })
    } else {
      clonedRequest = request;
    }

    return next.handle(request).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpEvent<any>) => {
        const startTime = clonedRequest.params.get('startTime');
        if (startTime) {
          const elapsedTime = Date.now() - +startTime;
          console.log(`Request ${request.url} took ${elapsedTime}ms`)
        }

        return event;
      })
    )
  }
}
