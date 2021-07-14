import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppRoutes} from './app.routes';
import {FAVORITES_PASSWORD} from './providers/favorites.password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private router: Router,
    @Inject(FAVORITES_PASSWORD) public password: number,
  ) { }

  goToHomePage(): void {
    this.router.navigate([AppRoutes.home]);
  }

  goToFavoritesPage(): void {
    if (this.router.url === '/' + AppRoutes.favorites) {
      return;
    }
    const enteredPassword = prompt('Введите пароль');
    if (+enteredPassword === this.password) {
      this.router.navigate([AppRoutes.favorites]);
    }
  }
}
