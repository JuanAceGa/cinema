import { Component, OnInit } from "@angular/core";
import { MoviesInTheatersServices } from "./movies-in-theaters.services";
import { AddTheatersServices } from "../../+theaters/+add-theaters/add-theaters.services";

@Component({
    selector: 'cn-mov-theat',
    templateUrl: './movies-in-theaters-layout.component.html',
    providers: [
        MoviesInTheatersServices,
        AddTheatersServices
    ]
})

export class MoviesInTheatersComponent implements OnInit {
    
    constructor(){ }

    ngOnInit(){
        
    }
}