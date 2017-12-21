import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Movie } from "../Movies";

@Injectable()
export class MoviesInTheatersServices {
    result:any;

    constructor(private _http: Http){}

    GetMovies(): Observable<Movie[]> {
        return this._http.get('/api/movies')
        .map(result => this.result = result.json().data);
    }
}