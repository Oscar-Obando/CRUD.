import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import{ HttpClient, HttpClientModule} from '@angular/common/http';

import{ UsuariosService } from './usuarios.service';

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers:[
        UsuariosService

    ],

    bootstrap:[AppComponent]
})

    export class AppModule { }





