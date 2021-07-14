import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {headerComponents} from './index';



@NgModule({
  declarations: [...headerComponents],
  imports: [
    CommonModule
  ],
  exports: [...headerComponents],
})
export class HeaderModule { }
