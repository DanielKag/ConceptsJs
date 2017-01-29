import { ConceptComponent } from './concept/concept.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConceptModule} from './concept/concept.module';


const appRoutes: Routes = [
  { path: 'concept/:name', component: ConceptComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ConceptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
