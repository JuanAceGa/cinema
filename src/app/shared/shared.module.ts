import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { CinemaLayoutModule } from './layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        CinemaLayoutModule
    ]    
})

export class SharedModule {}