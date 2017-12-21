import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Theater } from "../Theater";

@Injectable()
export class AddTheatersServices {
    result:any;

    constructor(private _http: Http){}

    GetTheaters(): Observable<Theater[]> {
        return this._http.get('/api/theaters')
        .map(result => this.result = result.json().data);
    }

    AddTheather(body:any): Observable<any> {
        return this._http.post('/api/theaters', body)
        .map(result => this.result = result.json());
    }

    EditTheather(body:any): Observable<any> {
        return this._http.put('/api/theaters', body)
        .map(result => this.result = result.json());
    }

    DeleteTheather(body:any): Observable<any> {
        return this._http.get('/api/theaters/delete', body)
        .map(result => this.result = result.json());
    }
}