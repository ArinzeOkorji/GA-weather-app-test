import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { retry, share, switchMap, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService implements OnDestroy {
  stopHttpCalls = new Subject<any>()

  constructor(
    private httpClient: HttpClient
  ) { }

  getWeatherReport(city: string) {
    return timer(1, 15000).pipe(
      switchMap(() => this.httpClient.get(`${environment.api}weather?q=${city}&appid=${environment.APIKey}`)),
      retry(),
      share(),
      takeUntil(this.stopHttpCalls)
    )

  }

  ngOnDestroy() {
    this.stopHttpCalls.next();
  }
}
