import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie } from "../../Movies";
import { AddMoviesServices } from "../add-movies.services";

@Component({
    selector: 'cn-tbl-add-movies',
    templateUrl: 'table-add-movies.component.html'
})

export class TableAddMoviesComponent implements OnInit {

    constructor(private service: AddMoviesServices){}

    ngOnInit(){
        
    }
}