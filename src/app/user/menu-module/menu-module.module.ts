import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectComponent } from './components/select/select.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AllItemsComponent,
    ItemComponent,
    ItemDetailsComponent,
    SelectComponent,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,CardModule,ButtonModule,DialogModule,FormsModule,InputTextModule
  ]
})
export class MenuModuleModule { }
