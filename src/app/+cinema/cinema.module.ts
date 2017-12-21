import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { routing } from "./cinema.routing";

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        routing
    ]
})
export class CinemaModule {}