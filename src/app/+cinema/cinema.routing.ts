import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'movies/movies-in-theaters',
        loadChildren: 'app/+cinema/+movies/+movies-in-theaters/movies-in-theaters-layout.module#MoviesInTheatersModule',
    },
    {
        path: 'movies/add-movies',
        loadChildren: 'app/+cinema/+movies/+add-movies/add-movies-layout.module#AddMoviesModule',
    },
    {
        path: 'theaters/add-theaters',
        loadChildren: 'app/+cinema/+theaters/+add-theaters/add-theaters-layout.module#AddTheatersModule',
    }
];

export const routing = RouterModule.forChild(routes);