import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ContainerComponent } from './container/container.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DetailsComponent } from './details/details.component';
import { FollwersComponent } from './follwers/follwers.component';
import { CachingInterceptor } from './cachingInterceptor';
import { RequestCache } from './request-cache.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductsComponent,
    DetailsComponent,
    FollwersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
    
  ],
  providers: [
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
