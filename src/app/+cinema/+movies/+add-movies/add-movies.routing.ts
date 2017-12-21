import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddMoviesComponent } from "./add-movies-layout.component";

export const addMoviesRoutes : Routes = [
    {
        path: '',
        component: AddMoviesComponent
    }
];

export const addMoviesRouting = RouterModule.forChild(addMoviesRoutes);