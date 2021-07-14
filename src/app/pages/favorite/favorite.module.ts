import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import {favoritesPageComponents} from './index';
import {TableModule} from '../../layouts/table/table.module';
import {LanguageModule} from '../../layouts/language/language.module';


@NgModule({
  declarations: [...favoritesPageComponents],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    TableModule,
    LanguageModule
  ]
})
export class FavoriteModule { }
