import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {languageListComponents} from './language-list';



@NgModule({
  declarations: [...languageListComponents],
  imports: [
    CommonModule
  ],
  exports: [...languageListComponents]
})
export class LanguageModule { }
