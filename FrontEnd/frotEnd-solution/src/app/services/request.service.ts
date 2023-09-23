import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDTO } from './response.dto';
import { environment } from 'src/enviroments/environments';

@Injectable()
export class RequestService {
    private _endpoint = "";

    constructor(
        private httpClient: HttpClient) {
        this._endpoint = environment.apiUrl;
    }

    public post(url: string, params: any, headers?: any): Observable<ResponseDTO> {
        return this.httpClient.post<ResponseDTO>(url, params, { headers });
    }

    public postApi(action: string, params: any): Observable<ResponseDTO> {
        const url = this._endpoint + action;
        return this.post(url, params);
    }

    public getApi(action: string, params: [{ key: string, value: string }] = null!): Observable<ResponseDTO> {

        let httpParams: HttpParams = new HttpParams();
        if (params != null) {
            params.forEach(function (entry) {
                httpParams = httpParams.append(entry.key, entry.value);
            });
        }
        const url = this._endpoint + action;
        return this.httpClient.get<ResponseDTO>(url, { params: httpParams });
    }


}