import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalErrorHandlerService } from './errorlog/GlobalErrorHandlerService';
import { ProductAComponent } from './components/product-a/product-a.component';
import { ProductBComponent } from './components/product-b/product-b.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductAComponent,
    ProductBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
