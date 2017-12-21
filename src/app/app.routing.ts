import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { MainLayoutComponent } from "./shared/layout/main-layout/main-layout.component";

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {pageTitle: 'Home'},
        children: [
            {
                path: '', redirectTo: 'cinema/movies/movies-in-theaters', pathMatch: 'full'
            },
            {
                path: 'cinema',
                loadChildren: 'app/+cinema/cinema.module#CinemaModule',
                data: {pageTitle: 'Cinema'}
            }
        ]        
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});