import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormAddMoviesComponent } from "./form/form-add-movies.component";
//import { TableAddMoviesComponent } from "./table/table-add-movies.component";
import { AddMoviesComponent } from "./add-movies-layout.component";
import { addMoviesRouting } from "./add-movies.routing";

@NgModule({
    imports: [
        CommonModule,
        addMoviesRouting,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FormAddMoviesComponent,
        //TableAddMoviesComponent,
        AddMoviesComponent
    ]
})

export class AddMoviesModule { }