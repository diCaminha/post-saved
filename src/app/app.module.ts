import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MatInputModule, 
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NewPostComponent } from './posts/new-post/ new-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    HeaderComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
