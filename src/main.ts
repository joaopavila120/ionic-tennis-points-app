import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(IonicModule.forRoot()), provideRouter(routes)],
}).catch(err => console.error(err));
