import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesInTheatersComponent } from "./movies-in-theaters-layout.component";

export const moviesInTheaterRoutes : Routes = [
    {
        path: '',
        component: MoviesInTheatersComponent
    }
];

export const moviesInTheaterRouting = RouterModule.forChild(moviesInTheaterRoutes);