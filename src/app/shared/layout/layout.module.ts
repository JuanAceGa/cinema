import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NavigationModule } from "./navigation/navigation.module";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NavigationModule,
        RouterModule
    ],
    declarations: [
        MainLayoutComponent
    ],
    exports: [
        NavigationModule
    ]
})

export class CinemaLayoutModule {

}
