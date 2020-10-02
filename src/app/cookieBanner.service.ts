import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseModel} from './models/CookieBanner';
import { Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CookieBannerService {

    constructor(private http: HttpClient) {
    }

    fetchCookieApi(): Observable<ResponseModel[]> {
        return this.http.get<ResponseModel[]>('https://fast-lowlands-95849.herokuapp.com/api/common/getbanner');
    }

}