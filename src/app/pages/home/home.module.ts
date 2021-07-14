import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {homePageComponents, homePageServices} from './index';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from '../../layouts/table/table.module';
import {LanguageModule} from '../../layouts/language/language.module';


@NgModule({
  declarations: [
    ...homePageComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    LanguageModule,
  ],
  providers: [
    ...homePageServices,
  ]
})
export class HomeModule { }
