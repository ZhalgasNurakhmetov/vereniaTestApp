import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {tableComponents} from './index';



@NgModule({
  declarations: [...tableComponents],
  imports: [
    CommonModule
  ],
  exports: [...tableComponents]
})
export class TableModule { }
