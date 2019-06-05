import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ShoppinglistComponent,
    AddItemComponent,
    EditItemComponent,
    DeleteItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'shoppingList', component: ShoppinglistComponent },
      { path: 'add-Item', component: AddItemComponent },
      { path: 'edit-Item', component: EditItemComponent },
      { path: 'delete-Item', component: DeleteItemComponent },
    ])
  ],
  providers: [
    ListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
