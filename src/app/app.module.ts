import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponentsModule } from './shared/shared-component.module';
import { AppComponent } from './app.component';
import { ListsContentComponent } from './content/content.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsContentComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
