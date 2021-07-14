import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from '../../../core/project-list.model';

@Component({
  selector: 'project-list-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  @Input() projectList: Project[];
  @Input() isHome: boolean;
  @Output() onAddToFavorites = new EventEmitter<Project>();
  @Output() onDeleteFromFavorites = new EventEmitter<Project>();

}
