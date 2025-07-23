import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';

bootstrapApplication(LoginCompComponent , appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AppComponent , appConfig)
  .catch((err) => console.error(err));
