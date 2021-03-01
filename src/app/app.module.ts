import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackendService } from './backend.service';
import { FormsModule } from '@angular/forms';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';

const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'products',
  component: ProductListComponent
  },
  {
  path: 'products/:id',
  component: ProductListComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
