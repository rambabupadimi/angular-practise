import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { CacheService } from "./cache.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: CacheService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('called cache interceptor');

        if(req.method !== 'GET') {
            return next.handle(req);
        }

        const cacheResponse:any = this.cacheService.get(req.url);
        if(cacheResponse) {
            return of(cacheResponse);
        }
        return next.handle(req).pipe(
            tap(event =>{
                if(event.type === HttpEventType.Response){
                    this.cacheService.put(req.url,event)
                }
            })
        )
    }

} 