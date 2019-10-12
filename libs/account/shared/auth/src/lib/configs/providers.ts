import { Provider } from '@angular/core';
import { JWT_CONFIG_TOKEN, JWT_CONFIG } from './jwt.config';

export const AUTH_PROVIDERS: Provider[] = [
  {
    provide: JWT_CONFIG_TOKEN,
    useValue: JWT_CONFIG
  }
];
