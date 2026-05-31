import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // 這裡修正為 AppComponent

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
