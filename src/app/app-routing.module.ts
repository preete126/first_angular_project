import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {path:"contact", component: ContactComponent},
  {path:"product-list", component: ProductListComponent},
  {path:"rout", component: RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [
    ContactComponent,
    ProductListComponent,
    AppComponent
]
