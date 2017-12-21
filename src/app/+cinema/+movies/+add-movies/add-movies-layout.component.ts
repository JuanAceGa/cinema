import { Component, OnInit } from "@angular/core";
import { AddMoviesServices } from "./add-movies.services";

@Component({
    selector: 'cn-add-movies',
    templateUrl: './add-movies-layout.component.html',
    providers: [AddMoviesServices]
})

export class AddMoviesComponent implements OnInit {
    
    constructor(){ }

    ngOnInit(){
        
    }
}