import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { APP_ROUTES } from './app/app-routing';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { appInterceptor } from '@shared/interceptor';
import { importProvidersFrom } from '@angular/core';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '@environment/environment.prod';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStore } from '@ngrx/store';
import { authReducer } from '@shared/reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import { AuthEffect } from '@shared/effect';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideHttpClient(withInterceptors([appInterceptor])),
    provideAnimations(),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideEffects(AuthEffect),
    provideStore({ auth: authReducer }),
    provideStoreDevtools({ name: 'cryptosutra' }),
    importProvidersFrom(
      // provide `Store` at the root level
      // register initial reducers
      // initialize runtime checks mechanism
      // StoreModule.forRoot({
      //   auth: authReducer,
      // }),
      // connect NgRx Store with Angular Router
      StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
      // connect NgRx Store with Redux Devtools extension
      // StoreDevtoolsModule.instrument(),
      BrowserAnimationsModule,
      provideFirestore(
        () => getFirestore(),
        provideAuth(() => getAuth())
      )
    ),
  ],
}).catch((error) => console.error(error));
