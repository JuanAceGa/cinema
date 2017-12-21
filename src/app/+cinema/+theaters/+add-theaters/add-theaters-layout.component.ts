import { Component, OnInit } from "@angular/core";
import { AddTheatersServices } from "./add-theaters.services";
import { AddMoviesServices } from "../../+movies/+add-movies/add-movies.services";

@Component({
    selector: 'cn-add-theaters',
    templateUrl: './add-theaters-layout.component.html',
    providers: [
        AddTheatersServices,
        AddMoviesServices
    ]
})

export class AddTheatersComponent implements OnInit {
    
    constructor(){ }

    ngOnInit(){
        
    }
}