import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

//Components
import { InputErrorStateMatcherExample } from './components/form/form.component';

//AngularAnimations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MatformField
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { ListComponent } from './pages/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
@NgModule({
  declarations: [
    AppComponent,
    InputErrorStateMatcherExample,
    ListComponent,
    CreatePostComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
