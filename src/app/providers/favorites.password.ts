import {InjectionToken} from '@angular/core';

export const FAVORITES_PASSWORD = new InjectionToken('password to enter favorites page');

export const FAVORITES_PASSWORD_PROVIDER = {
  provide: FAVORITES_PASSWORD,
  useValue: 1234,
};

