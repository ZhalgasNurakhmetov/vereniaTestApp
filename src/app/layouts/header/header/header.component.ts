import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'verenia-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Output() onGoToHomePage = new EventEmitter<void>();
  @Output() onGoToFavoritesPage = new EventEmitter<void>();

}
