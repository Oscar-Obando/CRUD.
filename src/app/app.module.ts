import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterOutlet } from '@angular/router';
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListProductsComponent } from "./components/list-products/list-products.component";


@NgModule ({
    declarations:[
        AppComponent,
        NavbarComponent,
        ListProductsComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet
    ],
    providers: [],
    bootstrap: [AppComponent]
})