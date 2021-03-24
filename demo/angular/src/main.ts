import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { addTheme, defineCustomElements } from '@scania/components';
import { theme as scania } from '@scania/theme-light'; 

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));

defineCustomElements();
addTheme(scania);