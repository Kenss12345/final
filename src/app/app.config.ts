import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"primarket-25d52","appId":"1:616420528765:web:850ee0c28fe9cdee971714","databaseURL":"https://primarket-25d52-default-rtdb.firebaseio.com","storageBucket":"primarket-25d52.appspot.com","apiKey":"AIzaSyCsmQUUHhP_AyXz0GY9KK3xdpwDdnAVdCI","authDomain":"primarket-25d52.firebaseapp.com","messagingSenderId":"616420528765"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"primarket-25d52","appId":"1:616420528765:web:850ee0c28fe9cdee971714","databaseURL":"https://primarket-25d52-default-rtdb.firebaseio.com","storageBucket":"primarket-25d52.appspot.com","apiKey":"AIzaSyCsmQUUHhP_AyXz0GY9KK3xdpwDdnAVdCI","authDomain":"primarket-25d52.firebaseapp.com","messagingSenderId":"616420528765"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), provideAnimationsAsync()]
};
