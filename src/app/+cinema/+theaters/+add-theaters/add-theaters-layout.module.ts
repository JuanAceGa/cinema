import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormAddTheatersComponent } from "./form/form-add-theaters.component";
import { AddTheatersComponent } from "./add-theaters-layout.component";
import { addTheatersRouting } from "./add-theaters.routing";

@NgModule({
    imports: [
        CommonModule,
        addTheatersRouting,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FormAddTheatersComponent,
        AddTheatersComponent
    ]
})

export class AddTheatersModule { }