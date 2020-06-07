import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MatInputModule, 
  MatCardModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NewPostComponent } from './posts/new-post/ new-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
