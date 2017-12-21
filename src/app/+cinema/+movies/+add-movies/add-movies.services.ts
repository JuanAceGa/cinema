import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Movie } from "../Movies";

@Injectable()
export class AddMoviesServices {
    result:any;

    constructor(private _http: Http){}

    GetMovies(): Observable<Movie[]> {
        return this._http.get('/api/movies')
        .map(result => this.result = result.json().data);
    }

    AddMovie(body:any): Observable<any> {
        return this._http.post('/api/movies', body)
        .map(result => this.result = result.json());
    }

    EditMovie(body:any): Observable<any> {
        return this._http.put('/api/movies', body)
        .map(result => this.result = result.json());
    }

    DeleteMovie(body:any): Observable<any> {
        console.log(body._id);
        return this._http.get('/api/movies/delete', body)
        .map(result => this.result = result.json());
    }
}