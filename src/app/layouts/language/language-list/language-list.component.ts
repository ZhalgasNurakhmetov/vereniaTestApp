import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'language-list',
  templateUrl: './language-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageListComponent {
  @Input() languageList: string[];

  @Output() onShowFullProjectList = new EventEmitter<boolean>();
  @Output() onFilterProjectList = new EventEmitter<string>();

}
