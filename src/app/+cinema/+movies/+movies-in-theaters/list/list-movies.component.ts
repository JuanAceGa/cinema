import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie } from "../../Movies";
import { MoviesInTheatersServices } from "../movies-in-theaters.services";
import { AddTheatersServices } from '../../../+theaters/+add-theaters/add-theaters.services';
import * as $ from 'jquery';

@Component({
    selector: 'tbl-list-movies',
    templateUrl: 'list-movies.component.html'
})

export class ListMoviesComponent implements OnInit {

    public movies: Array<any>;
    private theaters: Array<any>
    public theatersFunc: Array<any>;
    public movieTitle: string;
    
    constructor(private service: MoviesInTheatersServices, private serviceTheaters: AddTheatersServices){}

    ngOnInit(){
        this.service.GetMovies().subscribe(res => this.movies = res);
        this.serviceTheaters.GetTheaters().subscribe(res => this.theaters = res);
    }

    public viewTheaters(movie:string){
        if (this.theaters.length > 0) {
            this.theatersFunc = [];
            this.theaters.forEach(item => {
                item.movies.forEach(m => {
                    if (m.name === movie) {
                        this.theatersFunc.push({theater: item.name, location: item.location, time: m.time});
                    }
                });
            });

            if (this.theatersFunc.length > 0) {
                this.movieTitle = movie;
            } else {
                this.movieTitle = 'Sorry but the theaters are not showing this movie';
            }

            $('#modal-theaters').show();
        }
    }

    public closeModal(modal:string) {
        $(modal).toggle();
    }
}