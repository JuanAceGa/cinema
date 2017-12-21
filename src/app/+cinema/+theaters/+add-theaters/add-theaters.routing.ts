import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTheatersComponent } from "./add-theaters-layout.component";

export const addTheatersRoutes : Routes = [
    {
        path: '',
        component: AddTheatersComponent
    }
];

export const addTheatersRouting = RouterModule.forChild(addTheatersRoutes);