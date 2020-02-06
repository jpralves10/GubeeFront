import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient){}

    getProdutos(): Observable<any> {

        return this.httpClient.get<any>(
            `http://127.0.0.1:8888/gubee/produto/listar`
        );
    }
}