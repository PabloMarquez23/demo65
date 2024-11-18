import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideFirebaseApp(() => initializeApp({"projectId":"proyecto-integrador-47f0d","appId":"1:306326346167:web:09f79993f2f5f297f37032",
            "storageBucket":"proyecto-integrador-47f0d.firebasestorage.app","apiKey":"AIzaSyBkmfP8Ap1cQmTGbABGyZoeSRL_XM9ORC0",
            "authDomain":"proyecto-integrador-47f0d.firebaseapp.com","messagingSenderId":"306326346167","measurementId":"G-R9XL62GWW3"})), provideFirestore(() => getFirestore())]
};
