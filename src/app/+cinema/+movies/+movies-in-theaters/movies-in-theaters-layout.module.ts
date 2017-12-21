import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListMoviesComponent } from "./list/list-movies.component";
import { MoviesInTheatersComponent } from "./movies-in-theaters-layout.component";
import { moviesInTheaterRouting } from "./movies-in-theaters.routing";

@NgModule({
    imports: [
        CommonModule,
        moviesInTheaterRouting
    ],
    declarations: [
        ListMoviesComponent,
        MoviesInTheatersComponent
    ]
})

export class MoviesInTheatersModule { }